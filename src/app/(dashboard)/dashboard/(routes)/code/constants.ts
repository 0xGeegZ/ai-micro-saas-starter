import * as z from "zod"

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
})

export const codeNavItems = [
  {
    title: "Code",
    href: "/dashboard/code",
  },
  {
    title: "History",
    href: "/dashboard/code/history",
  },
]
