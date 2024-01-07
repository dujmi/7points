import { CalendarIcon, PersonIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ArticleProps {
  title: string;
  slug: string;
  description: string;
  authors: string[];
  date: Date;
}

export function Article(props: ArticleProps) {
  return (
    <Card className="rounded-md border">
      <CardHeader className="pt-6 ps-6 pb-2">
        <CardTitle className="font-medium underline underline-offset-4 text-lg font-mono hover:decoration-brand">
          <a data-astro-prefetch href={`/${props.slug}`}>
            {props.title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground text-base pb-8">
        <p>{props.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-1 justify-center items-start">
        <div className="flex flex-row items-center gap-2">
          <PersonIcon className="h-4 w-4 inline-block" />
          <p className="inline-block">
            {props.authors.map((author, i) => {
              if (i === props.authors.length - 1) {
                return author;
              } else {
                return `${author}, `;
              }
            })}
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <CalendarIcon className="h-4 w-4 inline-block" />
          <time dateTime={props.date.toISOString()} className="inline-block">
            {props.date.toLocaleDateString(undefined, {
              dateStyle: "medium",
              timeZone: "UTC",
            })}
          </time>
        </div>
      </CardFooter>
    </Card>
  );
}
