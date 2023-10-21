import { applications } from "@/config/tools"
import { GENERATED_BY_ENDPOINT } from "@/config/constants"
import { fetcher } from "./fetcher"

export const loadFullApplications = async () => {
  const fullApplications = await Promise.allSettled(
    applications.map(async (application) => {
      const data = await fetcher(
        `${GENERATED_BY_ENDPOINT}/applications/${application.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.GENERATED_BY_API_KEY}`,
          },
        }
      )
      return {
        ...application,
        ...data,
      }
    })
  )

  const successfulApplications = fullApplications
    .filter((result) => result.status === "fulfilled")
    .map((result) => (result as PromiseFulfilledResult<any>).value)

  return successfulApplications
}

export const loadFullApplication = async (applicationId: string) => {
  try {
    const application = await fetcher(
      `${GENERATED_BY_ENDPOINT}/applications/${applicationId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GENERATED_BY_API_KEY}`,
        },
      }
    )

    return application
  } catch (error) {
    console.error(`Failed to load application with id ${applicationId}`, error)
    return null
  }
}
