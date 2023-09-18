import { LandingNavbar } from "@/components/landing/landing-navbar"
import { Hero } from "@/components/landing/hero/hero"
import HeroSecondary from "@/components/landing/hero/hero-secondary"
import Testimonials from "@/components/landing/testimonials/testimonials"
import { TrustedBy } from "@/components/landing/partners/trusted-by"
import Community from "@/components/landing/community"
import { TestimonialsAlt } from "@/components/landing/testimonials/testimonials-alt"
import TestimonialHighlight from "@/components/landing/testimonials/testimonial-highlight"
import { Examples } from "@/components/landing/examples/examples"
import FeatureSections from "@/components/landing/features/column/feature-sections"
import { HeroAlt } from "@/components/landing/hero/hero-alt"
import { OpenSource } from "@/components/landing/open-source"
import { Technologies } from "@/components/landing/partners/technologies"
import { Features } from "@/components/landing/features/list/features"

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <Hero />
      <TestimonialsAlt />
      <Examples />
      {/* LLM Report Landing Page */}
      <HeroSecondary />
      <TrustedBy />
      <TestimonialHighlight />
      <FeatureSections />
      <Testimonials />
      <Community />
      {/* CallSquare Landing Page */}
      <HeroAlt />
      <Technologies />
      <Features />
      <OpenSource />
    </div>
  )
}

export default LandingPage
