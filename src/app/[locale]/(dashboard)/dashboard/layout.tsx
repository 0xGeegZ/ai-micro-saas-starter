import Navbar from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { checkSubscription } from "@/lib/subscription"
import { getApiLimitCount } from "@/lib/api-limit"
import { loadFullApplications } from "@/lib/applications"

type DashboardLayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

const DashboardLayout = async ({
  children,
  params: { locale },
}: DashboardLayoutProps) => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()
  const applications = await loadFullApplications()

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar
          applications={applications}
          isPro={isPro}
          apiLimitCount={apiLimitCount}
        />
      </div>
      <main className="md:pl-72 pb-10 h-full">
        <Navbar locale={locale} />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
