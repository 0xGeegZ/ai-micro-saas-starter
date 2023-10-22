"use client"

import BackedBy from "@/components/landing/partners/backed-by"
import ShimmerButton from "@/components/magicui/shimmer-button"
import { m } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useRouter } from "@/i18n/navigation"
import { Suspense } from "react"

const HeroSecondary = () => {
  const router = useRouter()

  return (
    <m.section
      id="hero"
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.02,
            // delayChildren: 0.5,
          },
        },
      }}
    >
      <div className="py-20 min-h-screen">
        <div className="max-w-screen flex flex-col items-center py-20 gap-6">
          {/* <m.a
            href="https://github.com/dillionverma/llm.report"
            target="_blank"
            className="group bg-gradient-to-br from-red-600 to-amber-600 hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md gap-2 flex justify-center items-center opacity-30"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <p className="inline-block text-white text-sm">
              llm.report is now open-source! 🎉
            </p>
            <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
              <ChevronRight className="w-4 h-4" />
            </span>
          </m.a> */}

          <m.h1
            className="flex flex-col md:flex-row text-5xl md:text-7xl font-bold justify-center text-center md:h-max"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <span className="text-primary-50 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                Log and Monitor your AI Apps
              </span>{" "}
              {/* for OpenAI */}
              {/* LLM Ops */}
            </span>
          </m.h1>
          <m.p
            className="text-muted-foreground leading-relaxed text-xl"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            Know exactly what&apos;s happening in your AI app with realtime
            logging, analytics, usage reports, and alerts.
            {/* Just enter your OpenAI API key, and we fetch your data from the
            OpenAI API directly to create a dashboard. No need to install
            anything. */}
            {/* End-to-end platform to build, test, monitor and deploy your llm
            based apps. */}
          </m.p>
          <m.div
            className="flex md:flex-col items-center justify-center w-[500px]"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <div className="grid md:grid-cols-1 place-items-center">
              <ShimmerButton
                className="flex items-center justify-center shadow-2xl transition-all hover:shadow-[0_0_40px_8px_rgba(185,28,28,0.5)]"
                background="radial-gradient(ellipse 80% 70% at 50% 120%, #f59e0b, #B91C1C)"
                onClick={() => {
                  router.push("/login")
                }}
              >
                <span className="whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm lg:text-2xl font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent z-10">
                  Get started for free
                </span>
                <ChevronRight className="h-6 w-6 duration-150 ease-in-out transform group-hover:translate-x-1 m-auto" />
              </ShimmerButton>

              {/* <Link
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "gap-2 whitespace-pre flex",
                  "group relative justify-center gap-2 w-full transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 rounded-sm"
                )}
                href={siteConfig.links.cal}
                target="_blank"
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
                <Phone className="h-4 w-4 fill-current" />
                Schedule a call
              </Link> */}
            </div>

            {/* <div className="mt-6">
              <JoinUsers />
            </div> */}
          </m.div>
          <m.div
            className="flex md:flex-col items-center justify-center space-x-4 mt-4 w-[500px]"
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <BackedBy />
          </m.div>
        </div>

        <m.div
          className="mx-auto max-w-[1200px]"
          variants={{
            hidden: { opacity: 0, y: -10 },
            show: { opacity: 1, y: 0, transition: { type: "spring" } },
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {/* <Dashboard /> */}
            <video
              src="https://static.videezy.com/system/resources/previews/000/022/066/original/4k-dynamic-preloader-with-dots-animation.mp4"
              autoPlay
              loop
              muted
              className="rounded-xl border shadow-2xl"
            />
          </Suspense>
        </m.div>
      </div>
    </m.section>
  )
}

export default HeroSecondary
