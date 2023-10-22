import { siteConfig } from "@/config/site"
import Link from "next-intl/link"
import { Icons } from "./icons"
import { RADIAN_BACKGROUND } from "@/config/constants"
import { cn } from "@/lib/utils"

const Banner = () => {
  return (
    <div
      className={cn(
        "relative isolate flex items-center gap-x-6 overflow-hidden  px-6 py-2.5 sm:px-3.5 justify-center z-50",
        RADIAN_BACKGROUND
      )}
    >
      <Link
        href={siteConfig.links.github}
        target="_blank"
        className="group bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md gap-2 flex justify-center items-center transition-all duration-300 ease-in-out"
      >
        <p className="inline-block text-white text-sm">
          {siteConfig.name} is proudly open-source! 🎉
        </p>
        <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
          <Icons.chevronRight className="w-4 h-4" />
        </span>
      </Link>
    </div>
  )
}

export default Banner
