import { applications } from "@/config/tools"
import { GENERATED_BY_ENDPOINT } from "@/config/constants"
import { fetcher } from "./fetcher"

import { env } from "@/env"

const fetchApplicationData = async (applicationId: string) => {
  return await fetcher(
    `${GENERATED_BY_ENDPOINT}/applications/${applicationId}`,
    {
      headers: {
        Authorization: `Bearer ${env.GENERATED_BY_API_KEY}`,
      },
    }
  )
}

export const loadFullApplications = async () => {
  try {
    const fullApplications = await Promise.allSettled(
      applications.map(async (application) => {
        const data = await fetchApplicationData(application.id)
        const fullApplication = {
          ...application,
          ...data,
        }

        return fullApplication
      })
    )

    const successfulApplications = fullApplications
      .filter((result) => result.status === "fulfilled")
      .map((result) => (result as PromiseFulfilledResult<any>).value)

    return successfulApplications
  } catch (error) {
    console.error(`Failed to load full applications`, error)
    return []
  }
}

export const loadFullApplication = async (applicationId: string) => {
  try {
    const application = applications.find((app) => app.id === applicationId)

    if (!application) {
      console.error(
        `Application with id ${applicationId} not found in applications array`
      )
      return null
    }

    const data = await fetchApplicationData(applicationId)

    const fullApplication = {
      ...application,
      ...data,
    }

    return fullApplication
  } catch (error) {
    console.error(`Failed to load application with id ${applicationId}`, error)
    return null
  }
}
