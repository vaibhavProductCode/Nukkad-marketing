import type { ContactSegment } from "@/types";
import { SEGMENT_COLORS } from "@/lib/constants";

interface BadgeProps {
  segment: ContactSegment;
}

export default function SegmentBadge({ segment }: BadgeProps) {
  const { bg, text, label } = SEGMENT_COLORS[segment] ?? { bg: "#f3f4f6", text: "#374151", label: segment };
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
      style={{ backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  );
}
