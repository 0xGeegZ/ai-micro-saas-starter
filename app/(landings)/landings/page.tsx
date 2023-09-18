import Community from "@/components/landing/community"
import FeatureSections from "@/components/landing/feature-sections"
import Hero from "@/components/landing/hero/hero-secondary"
import TestimonialHighlight from "@/components/landing/testimonial-highlight"
import Testimonials from "@/components/landing/testimonials/testimonials"
import { TrustedBy } from "@/components/landing/partners/trusted-by"

export default async function Home() {
  // const user = await getCurrentUser()
  // if (user) redirect("/openai")
  return (
    <>
      <Hero />
      <TrustedBy />
      <TestimonialHighlight />
      <FeatureSections />
      <Testimonials />
      <Community />
    </>
  )
}
