"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
};

export function BenefitCard({ title, description, icon: Icon, delay = 0 }: BenefitCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="glow-card rounded-2xl p-6"
    >
      <Icon className="h-7 w-7 text-cyan-300" />
      <h3 className="mt-4 text-xl font-semibold text-cyan-50">{title}</h3>
      <p className="mt-2 text-cyan-100/75">{description}</p>
    </motion.article>
  );
}
