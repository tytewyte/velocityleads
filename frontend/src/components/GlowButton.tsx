"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type GlowButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function GlowButton({
  href,
  className,
  children,
  type = "button",
  onClick,
}: GlowButtonProps) {
  const styles = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-cyan-200/40",
    "bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-fuchsia-500/20 px-6 py-3 font-semibold text-cyan-50",
    "shadow-[0_0_24px_rgba(70,244,255,0.26)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(159,105,255,0.45)]",
    className,
  );

  const content = (
    <motion.span whileHover={{ scale: 1.03 }} className={styles}>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
