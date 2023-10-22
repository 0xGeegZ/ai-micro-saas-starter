"use client"
import Link from "next-intl/link"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import { usePathname } from "next/navigation"

import { cn, transformApplications } from "@/lib/utils"
import { FreeCounter } from "@/components/free-counter"
import { siteConfig } from "@/config/site"
import { tools } from "@/config/tools"
import { Icons } from "./icons"
import { useState, useEffect } from "react"
import { Tool } from "@/types/tool"

const poppins = Montserrat({ weight: "600", subsets: ["latin"] })

const defaultRoutes: Tool[] = [
  {
    label: "Dashboard",
    icon: "sparkles",
    href: "/dashboard",
    color: "text-white",
  },
  {
    label: "Settings",
    icon: "settings",
    href: "/dashboard/settings",
  },
]

export const Sidebar = ({
  applications,
  apiLimitCount = 0,
  isPro = false,
}: {
  applications: any
  apiLimitCount: number
  isPro: boolean
}) => {
  const pathname = usePathname()

  const [routes, setRoutes] = useState(defaultRoutes)

  useEffect(() => {
    const mergeAllFeatures = async () => {
      const appRoutes = transformApplications(applications)
      // Taking all default routes except the last one
      const prevRoutesWithoutSettings = routes.slice(0, routes.length - 1)
      setRoutes([
        ...prevRoutesWithoutSettings,
        ...appRoutes,
        ...tools,
        // adding last default route at the end
        routes[routes.length - 1],
      ])
    }

    mergeAllFeatures()
  }, [])

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            {siteConfig.name}
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => {
            const Icon = Icons[route.icon as keyof typeof Icons]
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-muted-foreground"
                )}
              >
                <div className="flex items-center flex-1">
                  <Icon className={cn("h-5 w-5 mr-3", route?.color)} />
                  {route.label}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  )
}
