// "use client"

import { Fragment } from "react"

import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { renderFlag } from "./render-flag"

import { locales } from "@/i18n/locales"
import { useLocale } from "next-intl"
import Link from "next-intl/link"

export function LanguageSwitcher() {
  const locale = useLocale()

  const filteredLocales = locales?.filter(
    (currentLocale) => currentLocale !== locale
  )
  // // const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${cn(
          buttonVariants({ size: "sm", variant: "secondary" }),
          "p-3"
        )}`}
      >
        {/* className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors hover:bg-muted"> */}
        {renderFlag(locale)}
        <span className="sr-only">Languages</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {filteredLocales?.map((currentLocale, index) => (
          <Fragment key={index}>
            <Link
              href="/"
              // TODO error on sub layout language switch (example from dashboard)
              // href={pathname?.replace(`/${locale}`, "") ?? "/"}
              locale={currentLocale}
            >
              <DropdownMenuItem className="flex cursor-pointer items-start justify-center">
                {renderFlag(currentLocale)}
              </DropdownMenuItem>
            </Link>
            {index !== filteredLocales.length - 1 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
