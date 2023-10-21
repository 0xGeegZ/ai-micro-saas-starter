import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const transformApplications = (applications: any[]) => {
  return applications.map((application: any) => ({
    label: application.name,
    icon: application?.icon ?? "LayoutGrid",
    //  icon: application?.icon
    //   ? Icon[application.icon as keyof typeof Icon]
    //   : Icon.LayoutGrid,
    href: `/dashboard/applications/${application.id}`,
    color: application?.color ?? "text-green-700",
    bgColor: application?.bgColor ?? "bg-green-700/10",
  }))
}
