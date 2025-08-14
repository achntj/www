import Image from "next/image";

export type BlogHeaderProps = {
  title: string;
  caption?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export default function BlogHeader({ title, caption, image }: BlogHeaderProps) {
  return (
    <header className="space-y-4">
      <figure className="mt-2">
        <Image
          src={`/_images/${image.src}`}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="rounded-md"
        />
        {caption ? (
          <figcaption className="mt-2 text-xs opacity-75">{caption}</figcaption>
        ) : null}
      </figure>
      <h1 className="">{title}</h1>
    </header>
  );
}
