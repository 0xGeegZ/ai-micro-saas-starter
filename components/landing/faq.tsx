"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <section id="faq">
      <div className="py-14 max-w-[600px] mx-auto">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>Service description content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your pricing?</AccordionTrigger>
            <AccordionContent>Pricing description content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
