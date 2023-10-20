import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Icons } from "../components/icons"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const transformApplications = (applications: any[]) => {
  return applications.map((application: any) => ({
    label: application.name,
    icon: Icons.add,
    href: `/dashboard/applications/${application.id}`,
    color: "", // TODO
    bgColor: "defaultColor", // Add this line
  }))
}
