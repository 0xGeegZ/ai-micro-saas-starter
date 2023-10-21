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
