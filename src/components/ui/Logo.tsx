interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  className?: string;
}

export default function Logo({ size = "md", variant = "full", className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: 16, gap: 6 },
    md: { icon: 32, text: 22, gap: 8 },
    lg: { icon: 44, text: 30, gap: 10 },
  };
  const s = sizes[size];

  if (variant === "icon") {
    return (
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Nukkad"
      >
        {/* Orange square background */}
        <rect width="32" height="32" rx="8" fill="#FF6B35" />
        {/* N letterform in navy */}
        <path
          d="M7 24V8H11L19 18.5V8H25V24H21L13 13.5V24H7Z"
          fill="#1E293B"
        />
        {/* Small dot accent — represents the "nukkad" street corner */}
        <circle cx="25" cy="7" r="2.5" fill="white" opacity="0.85" />
      </svg>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: s.gap }}>
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#FF6B35" />
        <path
          d="M7 24V8H11L19 18.5V8H25V24H21L13 13.5V24H7Z"
          fill="#1E293B"
        />
        <circle cx="25" cy="7" r="2.5" fill="white" opacity="0.85" />
      </svg>
      <span
        style={{ fontSize: s.text, fontWeight: 900, letterSpacing: "-0.03em", color: "#1E293B", lineHeight: 1 }}
      >
        NUKKAD
      </span>
    </span>
  );
}
