"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";

type TierCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
};

export function TierCard({ title, price, description, features }: TierCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65 }}
      className="relative overflow-hidden rounded-3xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-fuchsia-500/10 p-8 shadow-[0_0_45px_rgba(70,244,255,0.2)]"
    >
      <div className="absolute -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[120px]" />
      <div className="relative">
        <h3 className="text-3xl font-black text-neon">{title}</h3>
        <p className="mt-3 text-cyan-100/80">{description}</p>
        <div className="mt-6 text-5xl font-black text-cyan-100">{price}</div>
        <p className="mt-1 text-sm text-cyan-100/65">per month</p>
        <ul className="mt-7 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-cyan-50/90">
              <Check className="h-4 w-4 text-cyan-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <GlowButton href="/signup" className="w-full justify-center py-4 text-base">
            Join the Movement
          </GlowButton>
        </div>
      </div>
    </motion.article>
  );
}
