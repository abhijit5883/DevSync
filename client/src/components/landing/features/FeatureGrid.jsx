import FeatureCard from "./FeatureCard";
import { FEATURES } from "@/constants/features";

export default function FeatureGrid() {
  return (
    <div
      className="
      mt-16
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-3
      "
    >
      {FEATURES.map((feature) => (
        <FeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
}