"use client"
import { useTranslations } from "next-intl"

import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { MAIN_COLOR } from "@/config/constants"
import { cn } from "@/lib/utils"
import { List } from "lucide-react"
import Link from "next-intl/link"

const features = [
  {
    id: "feature-ai",
    header: t("aiFeature1Header"),
    name: t("aiFeature1Name"),
    description: t("aiFeature1Description"),
    cta: t("getStarted"),
    href: "/sign-up",
    reverse: false,
  },
  {
    id: "feature-ai-2",
    header: t("aiFeature2Header"),
    name: t("aiFeature2Name"),
    description: t("aiFeature2Description"),
    cta: t("getStarted"),
    href: "/sign-up",
    reverse: true,
  },
  {
    id: "feature-ai-3",
    header: t("aiFeature3Header"),
    name: t("aiFeature3Name"),
    description: t("aiFeature3Description"),
    cta: t("getStarted"),
    href: "/sign-up",
    reverse: false,
  },
]

const FeatureSections = () => {
  const t = useTranslations("featureSections")
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
