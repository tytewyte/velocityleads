"use client";

import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { GlowButton } from "@/components/GlowButton";
import { Rocket, Orbit, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Hero backgroundSrc="/assets/cosmic-nebula.jpg" backgroundAlt="Cosmic nebula home background" />
      <SectionDivider />
      <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glow-card rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-black text-neon md:text-4xl">Our Mission</h2>
          <p className="mt-5 text-lg leading-relaxed text-cyan-100/85">
            VelocityLeads exists to help ambitious founders and teams break through stagnant growth cycles. We combine
            advanced lead intelligence, conversion science, and futuristic automation to create momentum that compounds.
          </p>
          <p className="mt-4 text-cyan-100/75">
            This is more than a platform. It is a movement toward bold execution, meaningful connection, and market leadership.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
          className="text-center text-3xl font-black text-neon md:text-4xl"
        >
          Membership Benefits
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Launch Faster",
              desc: "Deploy high-conversion campaigns in days, not months, with proven templates and AI acceleration.",
              icon: Rocket,
            },
            {
              title: "Orbit-Level Insights",
              desc: "Track lead quality and revenue momentum through immersive analytics built for precision decisions.",
              icon: Orbit,
            },
            {
              title: "Protected Advantage",
              desc: "Get exclusive member frameworks, private updates, and strategic guidance before public release.",
              icon: ShieldCheck,
            },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glow-card rounded-2xl p-6"
            >
              <item.icon className="h-7 w-7 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold text-cyan-50">{item.title}</h3>
              <p className="mt-3 text-cyan-100/75">{item.desc}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <GlowButton href="/signup" className="px-8 py-4 text-base">
            Join the Movement
          </GlowButton>
        </div>
      </section>
    </div>
  );
}
