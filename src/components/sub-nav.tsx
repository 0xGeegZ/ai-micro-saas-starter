"use client"

import Link from "next-intl/link"
import { usePathname } from "next/navigation"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
}

type SubNavProps = React.HTMLAttributes<HTMLDivElement> & {
  nav: NavItem[]
}
export function SubNav({ className, nav, ...props }: SubNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center px-6 pb-4">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          {nav.map((item) => (
            <Link
              className={cn(
                "flex items-center px-4",
                pathname === item.href
                  ? "font-bold text-primary"
                  : "font-medium text-muted-foreground"
              )}
              href={item.href}
              key={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <ScrollBar className="invisible" orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
