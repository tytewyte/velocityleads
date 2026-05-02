"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { GlowButton } from "@/components/GlowButton";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
};

export function Hero({
  title = "VelocityLeads",
  subtitle = "Awaken the Shift. Lead the Future.",
  ctaLabel = "Join the Movement",
  ctaHref = "/signup",
  backgroundSrc = "/assets/nebula-bg.svg",
  backgroundAlt = "4D nebula backdrop",
}: HeroProps) {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]));
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const orbY = useTransform(scrollY, [0, 1000], [0, -120]);
  const particles = Array.from({ length: 36 }, (_, i) => i);

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden py-24 md:py-32"
      onMouseMove={(event) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      }}
    >
      <div className="absolute inset-0">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <Image
            src={backgroundSrc}
            alt={backgroundAlt}
            fill
            priority
            className="scale-125 object-cover opacity-65"
          />
        </motion.div>
        <div className="starfield absolute inset-0" />
        <motion.div
          style={{ y: orbY }}
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[130px]"
        />
        {particles.map((particle) => {
          const left = (particle * 37) % 100;
          const top = (particle * 53) % 100;
          const duration = 6 + (particle % 8);
          return (
            <motion.span
              key={particle}
              className="absolute h-1 w-1 rounded-full bg-cyan-100/80 shadow-[0_0_12px_rgba(70,244,255,0.8)]"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ y: [0, -18, 0], opacity: [0.1, 0.95, 0.1], scale: [0.6, 1.2, 0.6] }}
              transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: particle * 0.08 }}
            />
          );
        })}
      </div>

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative mx-auto max-w-5xl px-4 text-center md:px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-black leading-tight text-white md:text-7xl"
        >
          <span className="text-neon">{title}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100/85 md:text-xl"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <GlowButton href={ctaHref} className="px-8 py-4 text-base">
            {ctaLabel}
          </GlowButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
