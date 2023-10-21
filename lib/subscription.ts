import { auth } from "@clerk/nextjs"

import db from "@/lib/db"
import { DAY_IN_MS } from "@/config/constants"

export const checkSubscription = async () => {
  const { userId } = auth()

  if (!userId) {
    return false
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  })

  if (!userSubscription) {
    return false
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid
}
