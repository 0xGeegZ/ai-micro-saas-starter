import { Badge } from "@/components/ui/badge"
import Image from "next/image"

type Tool = {
  name: string
  icon: React.ReactNode
}

type Features = {
  description: string
} & Tool

const features: Features[] = [
  {
    name: "Partcipent Invites",
    description:
      "Invite participants to your meeting via an invite link or an invite email.",
    icon: (
      <svg
        viewBox="0 0 19 16"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 fill-current"
      >
        <path
          d="M17.8337 3C17.8337 2.08333 17.0837 1.33333 16.167 1.33333H2.83366C1.91699 1.33333 1.16699 2.08333 1.16699 3M17.8337 3V13C17.8337 13.9167 17.0837 14.6667 16.167 14.6667H2.83366C1.91699 14.6667 1.16699 13.9167 1.16699 13V3M17.8337 3L9.50033 8.83333L1.16699 3"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Screen Sharing",
    description: "Share your screen with other participants in your call.",
    icon: (
      <svg
        viewBox="0 0 19 16"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 fill-current"
      >
        <path
          d="M16.167 1.33333H2.83366C1.91699 1.33333 1.16699 2.08333 1.16699 3V13C1.16699 13.9167 1.91699 14.6667 2.83366 14.6667H16.167C17.0837 14.6667 17.8337 13.9167 17.8337 13V3C17.8337 2.08333 17.0837 1.33333 16.167 1.33333Z"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.50033 8.83333L1.16699 3"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Accessing call history",
    description:
      "Keep track of your past interactions with the call history feature.",
    icon: (
      <svg
        viewBox="0 0 19 16"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 fill-current"
      >
        <path
          d="M16.167 1.33333H2.83366C1.91699 1.33333 1.16699 2.08333 1.16699 3V13C1.16699 13.9167 1.91699 14.6667 2.83366 14.6667H16.167C17.0837 14.6667 17.8337 13.9167 17.8337 13V3C17.8337 2.08333 17.0837 1.33333 16.167 1.33333Z"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.50033 8.83333L1.16699 3"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export const Features = () => {
  return (
    <section className="container max-w-[1400px] py-12 md:py-16  lg:py-24 mx-auto">
      <div className="w-full flex flex-col items-center text-center gap-16">
        <div className="flex flex-col items-center text-center gap-5">
          <Badge variant="secondary">Features</Badge>
          <div>
            <h2 className="text-2xl sm:text-4xl mb-4 font-semibold">
              Features for Enhanced Communication
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-[800px]">
              This project offers a range of features designed to facilitate
              smooth and efficient communication. From high-definition video
              calls to screen sharing and call history,
            </p>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/features-image.png"
            width={1200}
            height={800}
            alt="Hero Image"
            className="mx-auto"
          />
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center space-x-2 gap-5"
              >
                {feature.icon}
                <div>
                  <h3 className="text-xl font-medium mb-2">{feature.name}</h3>
                  <p className="text-muted-foreground max-w-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
