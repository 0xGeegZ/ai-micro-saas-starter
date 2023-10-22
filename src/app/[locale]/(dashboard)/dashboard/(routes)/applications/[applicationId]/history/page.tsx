import { Heading } from "@/components/heading"
import { Icons } from "@/components/icons"
import { ApplicationSubNav } from "@/components/application-sub-nav"
import { applicationNavItems } from "../../constants"
import { loadFullApplication } from "@/lib/applications"
import { notFound } from "next/navigation"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next-intl/link"

interface ApplicationHistoryPageProps {
  params: { applicationId: string }
}

const ApplicationHistoryPage = async ({
  params,
}: ApplicationHistoryPageProps) => {
  const application = await loadFullApplication(params.applicationId)

  if (!application) {
    notFound()
  }

  // const iframeSrc = `${GENERATED_BY_ENDPOINT}/iframe/applications/${application.slug}/history`
  const Icon = Icons[application.icon as keyof typeof Icons]

  return (
    <div className="h-full">
      <Heading
        title={application.name}
        description={application.description}
        icon={Icon}
        iconColor={application.color}
        bgColor={application.bgColor}
      />
      <ApplicationSubNav nav={applicationNavItems} />
      {/* <Iframe
        url={iframeSrc}
        width="100%"
        height="100%"
        className="h-full w-full"
        display="block"
        position="relative"
      /> */}
      <div className="overflow-hidden px-4">
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon
            className="text-muted-foreground"
            name="pizza"
          />
          <EmptyPlaceholder.Title>No history</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any history yet. <br />
            Start by using one of our tool.
          </EmptyPlaceholder.Description>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <Link className={cn(buttonVariants())} href="/dashboard">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              See all tools
            </Link>
          </div>
        </EmptyPlaceholder>
      </div>
    </div>
  )
}

export default ApplicationHistoryPage
