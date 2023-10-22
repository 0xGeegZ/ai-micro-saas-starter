import Link from "next-intl/link"
import { Button } from "../ui/button"
import { Icons } from "../icons"
import { siteConfig } from "@/config/site"

export const OpenSource = () => {
  return (
    <section className="container max-w-[1400px] py-12 px-4 md:p-16 lg:p-24 mx-auto">
      <div className="w-full max-w-7xl flex flex-col items-center text-center gap-4 bg-foreground rounded-xl py-8 px-5 sm:p-12">
        <div>
          <h2 className="text-[30px] leading-9 max-w-[300px] text-muted mx-auto sm:max-w-none sm:text-4xl md:text font-semibold mb-4">
            Proudly open source
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            {siteConfig.name} is open source. Check out the GitHub repository to
            get started.
          </p>
        </div>

        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <Button
            size="lg"
            variant={"secondary"}
            className="font-normal text-sm py-4"
          >
            <Icons.gitHub className="w-4 h-4 mr-2" />
            Github repo
          </Button>
        </Link>
      </div>
    </section>
  )
}
