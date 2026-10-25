import { CurrencyRegionGrid } from "@/components/ui/CurrencyFlag";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CurrencyGrid() {
  return (
    <section className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Corridors"
          title="Currencies we support"
          description="Move money across major African, European, American, and Asia Pacific currencies."
        />

        <div className="mt-12">
          <CurrencyRegionGrid layout="compact" />
        </div>
      </div>
    </section>
  );
}
