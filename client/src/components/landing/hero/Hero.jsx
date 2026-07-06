import Section from "@/components/layout/Section";
import HeroContent from "./HeroContent";
import HeroWorkspace from "./HeroWorkspace";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-12 lg:pt-20">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <HeroContent />
        <HeroWorkspace />
      </div>
    </Section>
  );
}