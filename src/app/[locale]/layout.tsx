import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { NextIntlClientProvider } from "next-intl"

import { ModalProvider } from "@/components/providers/modal-provider"
import { CrispProvider } from "@/components/providers/crisp-provider"

import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers/theme-provider"
import MotionProvider from "@/components/providers/motion-provider"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { loadFullApplications } from "@/lib/applications"
import { notFound } from "next/navigation"
import { locales } from "@/i18n/locales"
import { getMessages } from "next-intl/server"

const font = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

type RootLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages(locale)

  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) notFound()

  const applications = await loadFullApplications()

  return (
    <ClerkProvider>
      <html lang={locale} suppressHydrationWarning>
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
              <NextIntlClientProvider locale={locale} messages={messages}>
                <ModalProvider applications={applications} />
                {children}
                <Toaster />
              </NextIntlClientProvider>
            </body>
          </ThemeProvider>
        </MotionProvider>
      </html>
    </ClerkProvider>
  )
}
