import { ImageIcon, VideoIcon } from "lucide-react"

export const MAX_FREE_COUNTS = 5

// Add you own applications here
export const applicationsIds = ["clnerx13w0006jl0flfzyco1o"]

// Comment or uncomment the tools you want to use
export const tools = [
  // {
  //   label: "Conversation",
  //   icon: MessageSquare,
  //   href: "/dashboard/conversation",
  //   color: "text-violet-500",
  //   bgColor: "bg-violet-500/10",
  // },
  // {
  //   label: "Music Generation",
  //   icon: Music,
  //   href: "/dashboard/music",
  //   color: "text-emerald-500",
  //   bgColor: "bg-emerald-500/10",
  // },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/dashboard/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/dashboard/video",
  },
  // {
  //   label: "Code Generation",
  //   icon: Code,
  //   color: "text-green-700",
  //   bgColor: "bg-green-700/10",
  //   href: "/dashboard/code",
  // },
]
