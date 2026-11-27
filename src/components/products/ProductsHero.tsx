import { BRAND_POSITIONING } from "@/lib/site";
import { FramedPhoto } from "@/components/ui/FramedPhoto";
import { RichPageHero } from "@/components/ui/RichPageHero";
import { PHOTOS } from "@/lib/photos";

export function ProductsHero() {
  return (
    <RichPageHero
      title="Cross-border finance and treasury support for African business"
      description={BRAND_POSITIONING}
      visual={
        <FramedPhoto
          photo={PHOTOS.containerTerminal}
          className="min-h-[24rem]"
          imageClassName="object-cover object-center"
          sizes="(min-width: 1024px) 36rem, 100vw"
        />
      }
    />
  );
}
