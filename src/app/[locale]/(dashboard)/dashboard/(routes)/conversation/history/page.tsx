"use client"
import { MessageSquare } from "lucide-react"

import { Heading } from "@/components/heading"
import { buttonVariants } from "@/components/ui/button"

import { SubNav } from "@/components/sub-nav"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import Link from "next-intl/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { conversationNavItems } from "../constants"

const ConversationHistoryPage = () => {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <SubNav nav={conversationNavItems} />
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

export default ConversationHistoryPage
