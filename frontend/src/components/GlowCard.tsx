"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: "cyan" | "violet" | "pink" | "multi";
  hover?: boolean;
};

export function GlowCard({
  children,
  className,
  glow = "cyan",
  hover = true,
}: GlowCardProps) {
  const glowStyles = {
    cyan: "shadow-[0_0_30px_rgba(70,244,255,0.25)] border-cyan-200/30 hover:shadow-[0_0_50px_rgba(70,244,255,0.4)]",
    violet: "shadow-[0_0_30px_rgba(159,105,255,0.25)] border-violet-200/30 hover:shadow-[0_0_50px_rgba(159,105,255,0.4)]",
    pink: "shadow-[0_0_30px_rgba(255,77,219,0.25)] border-pink-200/30 hover:shadow-[0_0_50px_rgba(255,77,219,0.4)]",
    multi: "shadow-[0_0_30px_rgba(70,244,255,0.15),0_0_30px_rgba(159,105,255,0.15)] border-cyan-200/20 hover:shadow-[0_0_50px_rgba(70,244,255,0.3),0_0_50px_rgba(159,105,255,0.3)]",
  };

  const baseStyles =
    "relative border backdrop-blur-md bg-white/5 rounded-xl p-6 transition-all duration-500";
  const hoverClass = hover ? "hover:scale-105 hover:bg-white/10" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : {}}
      className={cn(baseStyles, glowStyles[glow], hoverClass, className)}
    >
      <div className="absolute inset-0 -z-10 rounded-xl opacity-30 blur-xl" />
      {children}
    </motion.div>
  );
}
