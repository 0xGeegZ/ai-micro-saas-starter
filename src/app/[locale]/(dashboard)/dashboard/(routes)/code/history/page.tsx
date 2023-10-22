"use client"
import { Heading } from "@/components/heading"
import { buttonVariants } from "@/components/ui/button"

import { SubNav } from "@/components/sub-nav"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import Link from "next-intl/link"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"
import { codeNavItems } from "../constants"
import { Code } from "lucide-react"

const CodeHistoryPage = () => {
  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <SubNav nav={codeNavItems} />
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
            <Link className={cn(buttonVariants())} href="/dashboard/code">
              <Icons.add className="mr-2 h-4 w-4" />
              Generate New Code
            </Link>
          </div>
        </EmptyPlaceholder>
      </div>
    </div>
  )
}

export default CodeHistoryPage
