import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import Link from "next-intl/link"

const TestimonialHighlight = () => {
  return (
    <>
      <section id="testimonial-highlight">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-20">
          <Link
            className="max-w-3xl mx-auto cursor-pointer text-center group"
            href="https://twitter.com/0xGeegZ"
          >
            {/* <h3 className=" font-semibold pb-6">What people are saying</h3> */}
            <figure>
              <blockquote>
                <p
                  className="text-accent-foreground text-xl text-center font-semibold sm:text-2xl italic group-hover:-translate-y-1 transition-all duration-300 ease-in-out
                "
                >
                  “🔥 {siteConfig.name} is awesome to build AI micro saas and
                  leverage Next 14“
                </p>
              </blockquote>
              <div className="mt-6">
                <img
                  width={64}
                  height={64}
                  src="https://pbs.twimg.com/profile_images/1575152461156913152/bb0IchqM_400x400.jpg"
                  alt="GeegZ"
                  className="w-16 h-16 mx-auto rounded-full"
                />
                <div className="mt-3">
                  <span className="block font-semibold">
                    GeegZ
                    <Icons.twitterVerified className="ml-1 mb-[0.2rem] inline h-4 w-4 text-blue-500" />
                  </span>
                  <span className="block text-accent-foreground text-sm mt-0.5">
                    Builder of {siteConfig.name}
                  </span>
                  <Icons.vercel className="w-24 mx-auto" />
                </div>
              </div>
            </figure>
          </Link>
        </div>
      </section>
    </>
  )
}

export default TestimonialHighlight
