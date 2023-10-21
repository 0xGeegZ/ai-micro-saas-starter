import { ApplicationSubNav } from "@/components/application-sub-nav"
import { Heading } from "@/components/heading"
import { Icons } from "@/components/icons"
import { GENERATED_BY_ENDPOINT } from "@/config/constants"
import { loadFullApplication } from "@/lib/applications"
import { notFound } from "next/navigation"
import { applicationNavItems } from "../constants"
import ApplicationIframe from "@/components/application-iframe"

interface ApplicationPageProps {
  params: { applicationId: string }
}

const ApplicationPage = async ({ params }: ApplicationPageProps) => {
  const application = await loadFullApplication(params.applicationId)

  if (!application) {
    notFound()
  }

  const iframeSrc = `${GENERATED_BY_ENDPOINT}/iframe/applications/${application.slug}`

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
      <ApplicationIframe url={iframeSrc} />
    </div>
  )
}

export default ApplicationPage
