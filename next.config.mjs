/** @type {import('next').NextConfig} */

import million from "million/compiler"
import "./env.mjs"

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
      "oaidalleapiprodscus.blob.core.windows.net",
      "cdn.openai.com",
    ],
  },
  transpilePackages: ["react-tweet"],
}

export default million.next(nextConfig, millionConfig)
