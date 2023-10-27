"use client"
import { TypographyP } from "@/components/ui/typography"
import { FormProps } from "@/lib/hooks/use-playground-form"
import { ExampleOutputDialog } from "./example-output-dialog"
import Marquee from "@/components/magicui/marquee"
import { RADIAN_BACKGROUND } from "@/config/constants"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const exampleFormValues: {
  [key: string]: FormProps & {
    output: any
  }
} = {
  booksRead: {
    prompt: "Top science fiction books read in 2020",
    output: { data: "Example data" },
  },
  rickAndMortyCharacters: {
    prompt: "List of Rick and Morty characters",
    output: { data: "Example data" },
  },
  randomNews: {
    prompt: "Generate random news about sport topic",
    output: { data: "Example data" },
  },
  musicGenres: {
    prompt: "Music genres",
    output: { data: "Example data" },
  },
  actors: {
    prompt: "List of random legendary actors who had role in Hollywood",
    output: { data: "Example data" },
  },
  programmingLanguages: {
    prompt: "Object-oriented programming languages",
    output: { data: "Example data" },
  },
  topEuropeCountries: {
    prompt: "Get the top 10 countries in Europe",
    output: { data: "Example data" },
  },
}

type ItemProps = {
  item: FormProps | null
  onSelectExample: (item: FormProps | null) => void
}

function Item({ item, onSelectExample }: ItemProps) {
  return (
    <div
      onClick={() => {
        onSelectExample(item)
      }}
      className="group min-w-[256px] w-[256px] border flex items-center justify-center border-primary/20 rounded p-4 cursor-pointer hover:border-muted-foreground hover:shadow-md transition-colors"
    >
      <TypographyP className="group-hover:text-primary text-primary/70 line-clamp-2 leading-tight">
        {item?.prompt}
      </TypographyP>
    </div>
  )
}

const firstRowExamples = [
  exampleFormValues.rickAndMortyCharacters,
  exampleFormValues.actors,
  exampleFormValues.booksRead,
  exampleFormValues.musicGenres,
]

const secondRowExamples = [
  exampleFormValues.randomNews,
  exampleFormValues.programmingLanguages,
  exampleFormValues.topEuropeCountries,
  exampleFormValues.actors,
]

export function Examples() {
  const [selectedExample, setSelectedExample] = useState<FormProps | null>(null)

  return (
    <section id="examples" className="relative">
      <div className="py-14 space-y-14">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight">
            Try one of our{" "}
            <span
              className={cn("bg-clip-text text-transparent", RADIAN_BACKGROUND)}
            >
              10 examples
            </span>{" "}
          </h2>

          <p className="mt-5 text-muted-foreground sm:text-lg">
            You can see more examples. Select one of the prompts below.
          </p>
        </div>
        <ExampleOutputDialog
          item={selectedExample}
          setOpen={() => setSelectedExample(null)}
        />
        <div className="flex gap-4 flex-col w-full max-w-[90vw]">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRowExamples.map((item, index) => (
              <Item
                key={`example-${item.prompt}-${index}`}
                item={item}
                onSelectExample={setSelectedExample}
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:40s]">
            {secondRowExamples.map((item, index) => (
              <Item
                key={`example-row-2-${item.prompt}-${index}`}
                item={item}
                onSelectExample={setSelectedExample}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
