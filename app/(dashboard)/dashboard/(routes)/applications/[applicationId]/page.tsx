import { ApplicationSubNav } from "@/components/application-sub-nav"
import { Heading } from "@/components/heading"
import { Icons } from "@/components/icons"
import { GENERATED_BY_ENDPOINT } from "@/config/constants"
import { loadFullApplication } from "@/lib/applications"
import { notFound } from "next/navigation"
import Iframe from "react-iframe"
import { applicationNavItems } from "../constants"

interface ApplicationPageProps {
  params: { applicationId: string }
}

const ApplicationPage = async ({ params }: ApplicationPageProps) => {
  const application = await loadFullApplication(params.applicationId)

  if (!application) {
    notFound()
  }

  const iframeSrc = `${GENERATED_BY_ENDPOINT}/iframe/applications/${application.slug}`

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

export default ApplicationPage
