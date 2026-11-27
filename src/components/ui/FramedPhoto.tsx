import Image from "next/image";
import type { SitePhoto } from "@/lib/photos";

type FramedPhotoProps = {
  photo: SitePhoto;
  className?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  children?: React.ReactNode;
};

export function FramedPhoto({
  photo,
  className = "",
  imageClassName = "object-cover",
  sizes,
  priority = false,
  children,
}: FramedPhotoProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
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
  );
}
