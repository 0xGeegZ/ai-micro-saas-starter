"use client"

import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { MAIN_COLOR } from "@/config/constants"
import { cn } from "@/lib/utils"
import { List } from "lucide-react"
import Link from "next-intl/link"

const features = [
  {
    id: "feature-ai",
    header: "AI Feature 1",
    name: "AI Feature Name 1",
    description:
      "Description for AI Feature 1. This feature provides advanced AI capabilities to your application, enhancing its functionality and user experience.",
    icon: Icons.openai,
    video:
      "https://static.videezy.com/system/resources/previews/000/022/066/original/4k-dynamic-preloader-with-dots-animation.mp4",
    cta: "Get Started",
    href: "/sign-up",
    reverse: false,
  },
  {
    id: "feature-ai-2",
    header: "AI Feature 2",
    name: "AI Feature Name 2",
    description:
      "Description for AI Feature 2. This feature leverages AI to provide unique insights and analytics, helping you make data-driven decisions.",
    icon: List,
    video:
      "https://static.videezy.com/system/resources/previews/000/022/066/original/4k-dynamic-preloader-with-dots-animation.mp4",
    cta: "Get Started",
    href: "/sign-up",
    reverse: true,
  },
  {
    id: "feature-ai-3",
    header: "AI Feature 3",
    name: "AI Feature Name 3",
    description:
      "Description for AI Feature 3. This feature uses AI to personalize user experiences, making your application more engaging and user-friendly.",
    icon: Icons.user,
    video:
      "https://static.videezy.com/system/resources/previews/000/022/066/original/4k-dynamic-preloader-with-dots-animation.mp4",
    cta: "Get Started",
    href: "/sign-up",
    reverse: false,
  },
]

const FeatureSections = () => {
  return (
    <>
      {features.map((feature) => (
        <section id={feature.id} key={feature.id}>
          <div className="mx-auto px-6 py-6 sm:py-20">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <div
                className={cn("m-auto lg:col-span-2", {
                  "lg:order-last": feature.reverse,
                })}
              >
                <h2
                  className={cn(
                    "text-base font-semibold leading-7",
                    MAIN_COLOR
                  )}
                >
                  {feature.header}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {feature.name}
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  {feature.description}
                </p>
                <Link
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                    "mt-8"
                  )}
                  href={feature.href}
                >
                  {feature.cta}
                </Link>
              </div>
              <video
                src={feature.video}
                autoPlay
                loop
                muted
                className="rounded-xl border m-auto lg:col-span-3 shadow-2xl"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default FeatureSections
