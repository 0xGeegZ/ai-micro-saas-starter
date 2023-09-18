import Community from "@/components/landing/community"
import Hero from "@/components/landing/hero/hero-secondary"
import Testimonials from "@/components/landing/testimonials/testimonials"
import { TrustedBy } from "@/components/landing/partners/trusted-by"
import FeatureSections from "@/components/landing/features/column/feature-sections"
import TestimonialHighlight from "@/components/landing/testimonials/testimonial-highlight"

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
