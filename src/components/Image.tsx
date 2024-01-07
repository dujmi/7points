interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Image(props: ImageProps) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} className="mb-4" />
      {props.caption && (
        <figcaption className="text-center text-xs">{props.caption}</figcaption>
      )}
    </figure>
  );
}
