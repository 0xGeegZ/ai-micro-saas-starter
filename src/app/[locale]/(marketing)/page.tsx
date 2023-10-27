import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Hero } from "@/components/landing/hero/hero"
import Testimonials from "@/components/landing/testimonials/testimonials"
import TestimonialHighlight from "@/components/landing/testimonials/testimonial-highlight"
import { Examples } from "@/components/landing/examples/examples"
import FeatureSections from "@/components/landing/features/column/feature-sections"
import { OpenSource } from "@/components/landing/open-source"
import { Technologies } from "@/components/landing/partners/technologies"
import { Suspense } from "react"

const LandingPage = () => {
  // const user = await getCurrentUser()
  // if (user) redirect("/dashboard")
  return (
    <div className="h-full ">
      <LandingNavbar />
      <Hero />
      <Technologies />
      <TestimonialHighlight />
      <FeatureSections />
      <Examples />
      <Suspense>
        <Testimonials />
      </Suspense>
      <OpenSource />
      {/* END OF LANDING PAGE */}
      {/* <TestimonialsAlt />
      <HeroSecondary />
      <TrustedBy />
      <Community />
      <HeroAlt />
      <Features /> */}
    </div>
  )
}

export default LandingPage
