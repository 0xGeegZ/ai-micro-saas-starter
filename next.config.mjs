/** @type {import('next').NextConfig} */

import million from "million/compiler"
import "./env.mjs"
import withNextIntl from "next-intl/plugin"

const i18nConfig = "./src/i18n/i18n.ts"

const millionConfig = {
  auto: { rsc: true },
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: {
        exclude: ["error"],
      },
    },
  }),
  images: {
    domains: [
      "googleusercontent.com",
      // "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
    ],
  },
  transpilePackages: ["react-tweet"],
}

const combinedMillionConfig = million.next(nextConfig, millionConfig)

const combinedIntlConfig = withNextIntl(i18nConfig)(combinedMillionConfig)

export default combinedIntlConfig
