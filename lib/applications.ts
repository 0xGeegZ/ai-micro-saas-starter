import { applicationsIds } from "@/config/application"
import { GENERATED_BY_ENDPOINT } from "@/config/constants"
import { fetcher } from "./fetcher"

export const loadFullApplications = async () => {
  const applications = await Promise.allSettled(
    applicationsIds.map((id) =>
      fetcher(`${GENERATED_BY_ENDPOINT}/applications/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.GENERATED_BY_API_KEY}`,
        },
      })
    )
  )

  const successfulApplications = applications
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
