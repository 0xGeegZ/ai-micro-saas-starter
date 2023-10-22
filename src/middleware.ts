import { authMiddleware, redirectToSignIn } from "@clerk/nextjs"
import createMiddleware from "next-intl/middleware"
import { defaultLocale, locales } from "./i18n/locales"
import { env } from "@/env"

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
    `/:locale${env.NEXT_PUBLIC_CLERK_SIGN_IN_URL_PATH}`,
    `/:locale${env.NEXT_PUBLIC_CLERK_SIGN_UP_URL_PATH}`,
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
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
  /*
   * Matcher: This is a regular expression-based matcher that filters request paths.
   * It matches all request paths except for the ones starting with or containing:
   * - api (API routes)
   * - _next/ (next files)
   * - assets (assets folder)
   * - _vercel (vercel folder)
   * - .well-known (well-known folder)
   * - icons (icons folder)
   * - images (images folder)
   * - _static (static files)
   * - all root files inside /public (e.g., /favicon.ico)
   *
   * The matcher is used in an array with a single regular expression pattern:
   */
  // matcher: [
  //   "/((?!api/|_next/|assets/|_vercel/|.well-known/|icons/|images/|_static/|[\\w-]+\\.\\w+).*)",
  // ],
}
// import { authMiddleware } from "@clerk/nextjs"

// export default authMiddleware({
//   publicRoutes: ["/", "/api/webhook"],
// })

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// }
