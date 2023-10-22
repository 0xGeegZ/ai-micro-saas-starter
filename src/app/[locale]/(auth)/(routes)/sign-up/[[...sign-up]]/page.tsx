import { env } from "@/env"
import { defaultLocale } from "@/i18n/locales"
import { SignUp } from "@clerk/nextjs"
import { useLocale } from "next-intl"

export default function Page() {
  const locale = useLocale()

  return (
    <SignUp
      redirectUrl={`${locale !== defaultLocale ? locale : ""}${
        env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL_PATH
      }`}
    />
  )
}
