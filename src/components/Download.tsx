import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface DownloadProps {
  data: object[];
  fileName: string;
}

export default function Download(props: DownloadProps) {
  const replacer = (key: any, value: any) => (value === null ? 0 : value); // specify how you want to handle null values here
  const header = Object.keys(props.data[0]);
  const csv = [
    header.join(","), // header row first
    ...props.data.map((row: any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    ),
  ].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const download = URL.createObjectURL(blob);

  return (
    <a href={download} download={`${props.fileName}.csv`}>
      <Button variant="ghost" size="icon">
        <DownloadIcon></DownloadIcon>
      </Button>
    </a>
  );
}
