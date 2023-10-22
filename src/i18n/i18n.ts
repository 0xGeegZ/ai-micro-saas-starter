import { headers } from "next/headers"
import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
  // You can read from headers or cookies here if necessary
  timeZone: headers().get("x-time-zone") ?? "Europe/Paris",
}))
