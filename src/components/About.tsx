import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function About() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="scroll-m-20 text-xl font-medium pb-2 font-mono">
          Founder
        </AccordionTrigger>
        <AccordionContent className="text-base text-muted-foreground">
          7 points was founded by Mislav Dujak, an aspiring software engineer
          and data scientist from Croatia. You can found me on Twitter (X)
          [at]ddmislav.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="scroll-m-20 text-xl font-medium pb-2 font-mono">
          Technology
        </AccordionTrigger>
        <AccordionContent className="text-base text-muted-foreground">
          This website is built with Astro, React (Typescript), Tailwind and
          shadcn/ui component library. I am also experienced in using
          Svelte(Kit) and Next.js. When it comes to data side of the job, I am
          profficient in Python and worked a little bit in R and Julia, too.
          Currently learning Rust.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
