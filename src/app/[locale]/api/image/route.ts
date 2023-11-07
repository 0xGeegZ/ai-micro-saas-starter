import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import { checkSubscription } from "@/lib/subscription"
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit"
import OpenAI from "openai"

import { env } from "@/env"

// Specifies the maximum allowed duration for this function to execute (in seconds)
export const maxDuration = 300

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY })

// const replicate = new Replicate({
//   auth: env.REPLICATE_API_TOKEN!,
// })

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt, amount = 1, resolution = "1024x1024" } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 })
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 })
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 })
    }

    // if (!configuration.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", { status: 500 })
    // }

    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      )
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    })

    // const response = await replicate.run(
    //   "stability-ai/sdxl:c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316",
    //   {
    //     input: {
    //       prompt,
    //       width: parseInt(resolution.split("x")[0], 10),
    //       height: parseInt(resolution.split("x")[1], 10),
    //       num_outputs: parseInt(amount, 10),
    //     },
    //   }
    // )

    if (!isPro) {
      await incrementApiLimit()
    }

    return NextResponse.json(response.data)
    // return NextResponse.json(response)
  } catch (error) {
    console.log("[IMAGE_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
