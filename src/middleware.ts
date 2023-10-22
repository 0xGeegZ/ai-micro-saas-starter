import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"
import createMiddleware from "next-intl/middleware"
import { defaultLocale, locales } from "./i18n/locales"

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
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
    `/sign-in`,
    `/sign-up`,
    `/:locale/sign-in`,
    `/:locale/sign-up`,
  ],
  afterAuth: (auth, req, evt) => {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    return intlMiddleware(req)
  },
})

export const config = {
  /*
   * Matcher: This is a regular expression-based matcher that filters request paths.
   * It matches all request paths except for the ones:
   * - Containing a dot (.) in it (typically used to exclude file paths like .js, .css, .png, etc.)
   * - Starting with "_next" (Next.js internal paths)
   * - Starting with "api" or "trpc" (API routes)
   *
   * The matcher is used in an array with three regular expression patterns:
   */
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
