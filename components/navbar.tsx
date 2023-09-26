import { UserButton } from "@clerk/nextjs"

import { MobileSidebar } from "@/components/mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import { ThemeToggle } from "./theme-toggle"

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end gap-x-2">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
