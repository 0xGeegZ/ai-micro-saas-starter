import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import { ModalProvider } from "@/components/providers/modal-provider"
import { CrispProvider } from "@/components/providers/crisp-provider"

import "../styles/globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"
import MotionProvider from "@/components/providers/motion-provider"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"

const font = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <MotionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <CrispProvider />
            <body
              className={cn(
                font.className,
                "scroll-smooth font-sans antialiased"
                // "relative flex min-h-screen w-full flex-col justify-center scroll-smooth bg-background font-sans antialiased"
              )}
            >
              <ModalProvider />
              {children}
              <Toaster />
            </body>
          </ThemeProvider>
        </MotionProvider>
      </html>
    </ClerkProvider>
  )
}
