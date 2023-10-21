import { Icons } from "@/components/icons"

export type Tool = {
  label: string
  icon: keyof typeof Icons
  href: string
  color?: string
  bgColor?: string
}
