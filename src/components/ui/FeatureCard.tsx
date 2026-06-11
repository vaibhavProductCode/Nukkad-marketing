import type { Feature } from "@/types";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{feature.icon}</div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
    </div>
  );
}
