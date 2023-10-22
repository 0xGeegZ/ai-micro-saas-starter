import { siteConfig } from "@/config/site"
import Link from "next-intl/link"

const Privacy = () => {
  return (
    <div className="prose container flex flex-col justify-center max-w-10xl pb-16 px-8">
      <h1 className="tracking-wide font-semibold flex m-auto text-5xl text-left pt-12 text-gray-950">
        Privacy Policy
      </h1>

      <p>Yur Privacy Policy goes here</p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to contact us at{" "}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}t</Link>.
      </p>
    </div>
  )
}

export default Privacy
