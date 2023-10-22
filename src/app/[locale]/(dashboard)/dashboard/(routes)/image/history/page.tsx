"use client"
import { ImageIcon } from "lucide-react"

import { Heading } from "@/components/heading"
import { buttonVariants } from "@/components/ui/button"

import { SubNav } from "@/components/sub-nav"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import Link from "next-intl/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { imageNavItems } from "../constants"

const ImageHistoryPage = () => {
  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <SubNav nav={imageNavItems} />
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
            <Link className={cn(buttonVariants())} href="/dashboard/image">
              <Icons.add className="mr-2 h-4 w-4" />
              Generate New Image
            </Link>
          </div>
        </EmptyPlaceholder>
      </div>
    </div>
  )
}

export default ImageHistoryPage
