"use client"

import Link from "next-intl/link"
import { useParams, usePathname } from "next/navigation"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

type NavItem = {
  title: string
  href: string
}

type ApplicationSubNavProps = React.HTMLAttributes<HTMLDivElement> & {
  nav: NavItem[]
}
export function ApplicationSubNav({
  className,
  nav,
  ...props
}: ApplicationSubNavProps) {
  const params = useParams()
  const path = usePathname()
  // const router = useRouter()

  const basePath = "/dashboard/applications"

  if (!params || !path) {
    return null
  }

  const pathname = path
    .replace(`${basePath}/${params.applicationId}`, "/")
    .replace("//", "/")

  return (
    <div className="flex items-center px-6 pb-4">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          {nav.map((item) => {
            const fullPath = `${basePath}/${params.applicationId}${item.href}`
            return (
              <Link
                className={cn(
                  "flex items-center px-4",
                  pathname === item.href
                    ? "font-bold text-primary"
                    : "font-medium text-muted-foreground"
                )}
                href={fullPath}
                key={item.href}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
        <ScrollBar className="invisible" orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
