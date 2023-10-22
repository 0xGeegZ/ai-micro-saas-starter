import { Icons } from "@/components/icons"
import { badgeVariants } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Image from "next/image"
import Link from "next-intl/link"

export const HeroAlt = () => {
  return (
    <section className="container max-w-[1400px] py-16 lg:py-24 mx-auto">
      <div className="flex flex-col items-center text-center gap-16">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
          <Link
            href={siteConfig.links.github}
            className={`${badgeVariants({ variant: "secondary" })} w-fit`}
            target="_blank"
            rel="noreferrer"
          >
            Find the project on Github
            <Icons.chevronRight className="w-4 h-4 ml-1" />
          </Link>
          <h1 className="text-4xl md:text-6xl max-w-3xl font-semibold leading-tight">
            {siteConfig.description}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            {siteConfig.description}
          </p>
          <Link href="/register">
            <Button size="lg" className="font-normal py-6">
              Try {siteConfig.name}
            </Button>
          </Link>
        </div>
        <Image
          src="/hero-image.png"
          width={1200}
          height={800}
          alt="Hero Image"
        />
      </div>
    </section>
  )
}
