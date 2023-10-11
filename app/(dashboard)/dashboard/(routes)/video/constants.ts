import * as z from "zod"

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
})

export const videoNavItems = [
  {
    title: "Video",
    href: "/dashboard/video",
  },
  {
    title: "History",
    href: "/dashboard/video/history",
  },
]
