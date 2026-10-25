import { SectionHeader } from "@/components/ui/SectionHeader";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="border-b border-zender-navy/8 bg-zender-mint/30 px-6 pb-14 pt-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
