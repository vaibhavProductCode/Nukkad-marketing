"use client";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizes = { sm: "px-3 py-1.5 text-xs", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  const variants = {
    primary: "bg-[#FF6B35] text-white hover:bg-[#e85520] focus:ring-orange-400 shadow-sm",
    secondary: "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 focus:ring-slate-300",
    ghost: "text-slate-600 hover:bg-slate-100 focus:ring-slate-200",
  };
  const base = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
