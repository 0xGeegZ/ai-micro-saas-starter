import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import { checkSubscription } from "@/lib/subscription"
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit"
import Replicate from "replicate"

// Specifies the maximum allowed duration for this function to execute (in seconds)
export const maxDuration = 300

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

export async function POST(req: Request) {
  console.log("hohoho")
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt, amount = 1, resolution = "512x512" } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    // if (!configuration.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", { status: 500 })
    // }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 })
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 })
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 })
    }

    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      )
    }

    // TODO use stable diffusion XL model
    // const response = await openai.createImage({
    //   prompt,
    //   n: parseInt(amount, 10),
    //   size: resolution,
    // })

    const response = await replicate.run(
      "stability-ai/sdxl:c221b2b8ef527988fb59bf24a8b97c4561f1c671f73bd389f866bfb27c061316",
      {
        input: {
          prompt,
          width: parseInt(resolution.split("x")[0], 10),
          height: parseInt(resolution.split("x")[1], 10),
          num_outputs: parseInt(amount, 10),
        },
      }
    )

    if (!isPro) {
      await incrementApiLimit()
    }

    // return NextResponse.json(response.data.data)
    return NextResponse.json(response)
  } catch (error) {
    console.log("[IMAGE_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
