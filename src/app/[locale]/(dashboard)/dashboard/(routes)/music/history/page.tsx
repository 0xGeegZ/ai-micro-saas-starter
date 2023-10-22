"use client"
import { Music } from "lucide-react"

import { Heading } from "@/components/heading"
import { buttonVariants } from "@/components/ui/button"

import { SubNav } from "@/components/sub-nav"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import Link from "next-intl/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { musicNavItems } from "../constants"

const MusicHistoryPage = () => {
  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <SubNav nav={musicNavItems} />
      <div className="overflow-hidden px-4">
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon
            className="text-muted-foreground"
            name="pizza"
          />
          <EmptyPlaceholder.Title>No history</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any history yet. <br />
            Start by generating an image.
          </EmptyPlaceholder.Description>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <Link
              className={cn(buttonVariants())}
              href="/dashboard/conversation"
            >
              <Icons.add className="mr-2 h-4 w-4" />
              Generate New Image
            </Link>
          </div>
        </EmptyPlaceholder>
      </div>
    </div>
  )
}

export default MusicHistoryPage
