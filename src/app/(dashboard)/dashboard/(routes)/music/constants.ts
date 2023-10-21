import * as z from "zod"

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Music prompt is required",
  }),
})

export const musicNavItems = [
  {
    title: "Music",
    href: "/dashboard/music",
  },
  {
    title: "History",
    href: "/dashboard/music/history",
  },
]
