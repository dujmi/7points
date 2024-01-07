import { Badge } from "@/components/ui/badge";

export function Twitter() {
  return (
    <Badge className="inline-block" variant="secondary">
      <a
        href="https://twitter.com/mislavdujak"
        target="_blank"
        className="font-normal font-mono"
      >
        @mislavdujak
      </a>
    </Badge>
  );
}
