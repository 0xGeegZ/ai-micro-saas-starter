import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { MAIN_COLOR } from "@/config/constants"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next-intl/link"

export default async function Community() {
  return (
    <section id="community">
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8 py-20">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <h3 className={cn("font-semibold", MAIN_COLOR)}>Community</h3>
          <p className="text-accent-foreground text-3xl font-semibold sm:text-4xl">
            Join our community
          </p>
          <p className="text-muted-foreground">
            Join our open-source community and help shape the future of LLM
            Report.
          </p>
        </div>
        <div className="mt-4 flex gap-4 justify-center items-center">
          <Link
            href={`${siteConfig.links.github}/issues`}
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "gap-2"
            )}
          >
            <Icons.gitHub className="w-6 h-6" />
            Github Discussions
          </Link>
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "gap-2"
            )}
          >
            <Icons.discord className="w-6 h-6" />
            Discord Server
          </Link>
        </div>
      </div>
    </section>
  )
}
