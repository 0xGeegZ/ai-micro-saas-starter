import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import { checkSubscription } from "@/lib/subscription"
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit"
import { env } from "@/env"
import OpenAI from "openai"

// Specifies the maximum allowed duration for this function to execute (in seconds)
export const maxDuration = 300

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY })

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // if (!configuration.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", { status: 500 })
    // }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 })
    }

    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      )
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages,
    })

    if (!isPro) {
      await incrementApiLimit()
    }

    return NextResponse.json(response.choices[0].message)
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
