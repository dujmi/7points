import { Badge } from "@/components/ui/badge";

export function Twitter() {
  return (
    <Badge className="inline-block" variant="secondary">
      <a
        href="https://twitter.com/ddmislav"
        target="_blank"
        className="font-normal font-mono"
      >
        @ddmislav
      </a>
    </Badge>
  );
}
