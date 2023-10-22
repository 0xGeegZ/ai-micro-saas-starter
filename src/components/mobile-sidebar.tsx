"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

export const MobileSidebar = ({
  applications,
  apiLimitCount = 0,
  isPro = false,
}: {
  applications: any
  apiLimitCount: number
  isPro: boolean
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden" asChild>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar
          applications={applications}
          isPro={isPro}
          apiLimitCount={apiLimitCount}
        />
      </SheetContent>
    </Sheet>
  )
}
