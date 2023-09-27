import Marquee from "@/components/magicui/marquee"
import { ServerTweetCard } from "@/components/magicui/tweet-card"
import { RADIAN_BACKGROUND } from "@/config/constants"
import { cn } from "@/lib/utils"
import { getTweet } from "react-tweet/api"

const tweetIds = [
  "1707007299917688929",
  "1663814742920806401",
  "1665387091742580744",
  "1696522205147078761",
  "1689959512763957248",
  "1679055373603315714",
  "1663837570285928448",
  "1663443633591275522",
  "1663443142169841665",
  "1658108497551147016",
  "1657050493573529604",
  "1663441773840957440",
]

async function getTweets() {
  try {
    const tweets = await Promise.all(
      tweetIds
        .map(async (id) => {
          try {
            const tweet = await getTweet(id)
            if (!tweet) return null
            return tweet
          } catch (error) {
            return null
          }
        })
        .filter((t) => t !== null)
    )

    return tweets.length ? { props: { tweets } } : { notFound: true }
  } catch (error) {
    return { notFound: true }
  }
}

export default async function Testimonials() {
  const { props } = await getTweets()
  const firstRow = props?.tweets?.slice(0, props?.tweets?.length / 2)
  const secondRow = props?.tweets?.slice(props?.tweets?.length / 2)

  return (
    <section id="testimonials" className="relative">
      <div className="py-14 space-y-14">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight">
            Loved by{" "}
            <span
              className={cn("bg-clip-text text-transparent", RADIAN_BACKGROUND)}
            >
              3,000+ users
            </span>{" "}
            and{" "}
            <span
              className={cn("bg-clip-text text-transparent", RADIAN_BACKGROUND)}
            >
              companies
            </span>{" "}
            worldwide
          </h2>

          <p className="mt-5 text-muted-foreground sm:text-lg">
            Here&apos;s what our users have to say
          </p>
        </div>

        <div className="flex gap-4 flex-col">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow?.map((t, idx) => (
              <ServerTweetCard
                tweet={t}
                key={idx}
                className="h-full w-72 min-w-[22rem]"
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:40s]">
            {secondRow?.map((t, idx) => (
              <ServerTweetCard
                tweet={t}
                key={idx}
                className="h-full w-72 min-w-[22rem]"
              />
            ))}
          </Marquee>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-slate-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-slate-950"></div>
    </section>
  )
}
