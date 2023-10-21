import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url().min(1),

    CLERK_SECRET_KEY: z.string().min(1),

    GENERATED_BY_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    REPLICATE_API_TOKEN: z.string().optional(),

    STRIPE_API_KEY: z.string().optional(),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url().optional(),

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),

    NEXT_PUBLIC_CRISP_WEBSITE_ID: z.string().optional(),
  },
  experimental__runtimeEnv: {},
})
