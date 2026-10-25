import Image from "next/image";
import type { SitePhoto } from "@/lib/photos";

type PhotoCreditProps = {
  photo: SitePhoto;
  tone?: "dark" | "light";
  className?: string;
};

export function PhotoCredit({ photo, tone = "dark", className = "" }: PhotoCreditProps) {
  const link =
    tone === "light"
      ? "text-white/80 underline-offset-2 hover:text-white hover:underline"
      : "text-zender-navy/60 underline-offset-2 hover:text-zender-navy hover:underline";
  const text = tone === "light" ? "text-white/60" : "text-zender-navy/40";

  return (
    <p className={`text-[11px] leading-relaxed ${text} ${className}`}>
      {photo.place}. Photo by{" "}
      <a href={photo.authorUrl} target="_blank" rel="noreferrer" className={link}>
        {photo.author}
      </a>{" "}
      on{" "}
      <a href={photo.sourceUrl} target="_blank" rel="noreferrer" className={link}>
        {photo.source}
      </a>
    </p>
  );
}

type FramedPhotoProps = {
  photo: SitePhoto;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  credit?: boolean;
  creditTone?: "dark" | "light";
  children?: React.ReactNode;
};

export function FramedPhoto({
  photo,
  className = "",
  imageClassName = "object-cover",
  sizes,
  priority = false,
  credit = true,
  creditTone = "dark",
  children,
}: FramedPhotoProps) {
  return (
    <figure>
      <div className={`relative overflow-hidden rounded-[1.75rem] ${className}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
        {children}
      </div>
      {credit ? (
        <figcaption className="mt-3">
          <PhotoCredit photo={photo} tone={creditTone} />
        </figcaption>
      ) : null}
    </figure>
  );
}
