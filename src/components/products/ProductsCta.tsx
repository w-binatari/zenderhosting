import { RichCta } from "@/components/ui/RichCta";

type ProductsCtaProps = {
  title: string;
  description: string;
};

export function ProductsCta({ title, description }: ProductsCtaProps) {
  return <RichCta title={title} description={description} />;
}
