import { Tool } from "@/types/tool"

// Add you own applications here
export const applications = [
  {
    id: "clnerx13w0006jl0flfzyco1o",
    icon: "messageSquare",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
]

// Comment or uncomment the tools you want to use
export const tools: Tool[] = [
  // {
  //   label: "Conversation",
  //   icon: "messageSquare",
  //   href: "/dashboard/conversation",
  //   color: "text-violet-500",
  //   bgColor: "bg-violet-500/10",
  // },
  // {
  //   label: "Music Generation",
  //   icon: "music",
  //   href: "/dashboard/music",
  //   color: "text-emerald-500",
  //   bgColor: "bg-emerald-500/10",
  // },
  {
    label: "Image Generation",
    icon: "imageIcon",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/dashboard/image",
  },
  // {
  //   label: "Video Generation",
  //   icon: "videoIcon",
  //   color: "text-orange-700",
  //   bgColor: "bg-orange-700/10",
  //   href: "/dashboard/video",
  // },
  // {
  //   label: "Code Generation",
  //   icon: "code",
  //   color: "text-green-700",
  //   bgColor: "bg-green-700/10",
  //   href: "/dashboard/code",
  // },
]
