import { UserButton } from "@clerk/nextjs"

import { MobileSidebar } from "@/components/mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import { ThemeToggle } from "./theme-toggle"
import { loadFullApplications } from "@/lib/applications"

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()
  const applications = await loadFullApplications()

  return (
    <div className="flex items-center p-4">
      <MobileSidebar
        applications={applications}
        isPro={isPro}
        apiLimitCount={apiLimitCount}
      />
      <div className="flex w-full justify-end gap-x-2">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
