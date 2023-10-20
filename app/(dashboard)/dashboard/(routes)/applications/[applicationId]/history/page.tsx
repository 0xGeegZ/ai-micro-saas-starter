import { Heading } from "@/components/heading"
import { Icons } from "@/components/icons"
import { ApplicationSubNav } from "@/components/application-sub-nav"
import { applicationNavItems } from "../../constants"
import { loadFullApplication } from "@/lib/applications"
import { notFound } from "next/navigation"
import Iframe from "react-iframe"
import { GENERATED_BY_ENDPOINT } from "@/config/constants"

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

  const iframeSrc = `${GENERATED_BY_ENDPOINT}/iframe/applications/${application.slug}/history`

  return (
    <div className="h-full">
      <Heading
        title={application.name}
        description={application.description}
        icon={Icons.add}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <ApplicationSubNav nav={applicationNavItems} />
      {/* <div className="overflow-hidden px-4">
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon
            className="text-muted-foreground"
            name="pizza"
          />
          <EmptyPlaceholder.Title>No history</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any history yet. <br />
            Start by using the application.
          </EmptyPlaceholder.Description>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <Link className={cn(buttonVariants())} href="/dashboard">
              <Icons.add className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </div>
        </EmptyPlaceholder>
      </div> */}
      {/* <iframe src={iframeSrc} width="100%" height="100%">
        <p>Your browser does not support iframes.</p>
      </iframe> */}
      <Iframe
        url={iframeSrc}
        width="100%"
        height="100%"
        className="h-full w-full"
        display="block"
        position="relative"
      />
    </div>
  )
}

export default ApplicationHistoryPage
