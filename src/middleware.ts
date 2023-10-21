// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/", "/api/webhook"],
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { authMiddleware } from "@clerk/nextjs"
import createMiddleware from "next-intl/middleware"
import { defaultLocale, locales } from "./i18n/locales"

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
})

export default authMiddleware({
  beforeAuth: (req) =>
    // Execute next-intl middleware before Clerk's auth middleware
    intlMiddleware(req),
  // Ensure that locale specific sign-in pages are public
  publicRoutes: [
    "/",
    ...locales
      .filter((locale) => locale !== defaultLocale)
      .map((locale) => `/${locale}`),
    "/:locale/sign-in",
    "/:locale/sign-up",
  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
