"use client"
import TypewriterComponent from "typewriter-effect"
import { useAuth } from "@clerk/nextjs"

import ShimmerButton from "@/components/magicui/shimmer-button"
import { ChevronRight } from "lucide-react"
import router from "next/router"
import {
  RADIAN_BACKGROUND,
  SHIMMER_BACKGROUND,
  SHIMMER_HOVER,
} from "@/config/constants"
import { cn } from "@/lib/utils"

export const Hero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className="text-primary font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>AI-Driven Micro-SaaS for</h1>
        <div className={cn("text-transparent bg-clip-text", RADIAN_BACKGROUND)}>
          <TypewriterComponent
            options={{
              strings: [
                "Social Media Marketing.",
                "Content Writing.",
                "Recruitment & HR.",
                "Product Management.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-muted-foreground">
        Work 10x faster with your personal AI assistants.
      </div>
      <div className="grid md:grid-cols-1 place-items-center">
        <ShimmerButton
          className={cn(
            "flex items-center justify-center shadow-2xl",
            SHIMMER_HOVER
          )}
          background={SHIMMER_BACKGROUND}
          onClick={() => {
            router.push(isSignedIn ? "/dashboard" : "/sign-up")
          }}
        >
          <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
            Get started for free
          </span>
          <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
        </ShimmerButton>
      </div>
      <div className="text-muted-foreground text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  )
}
