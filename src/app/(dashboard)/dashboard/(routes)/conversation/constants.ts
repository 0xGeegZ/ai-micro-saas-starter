import * as z from "zod"

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
})

export const conversationNavItems = [
  {
    title: "Conversation",
    href: "/dashboard/conversation",
  },
  {
    title: "History",
    href: "/dashboard/conversation/history",
  },
]
