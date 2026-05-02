"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { GlowCard } from "@/components/GlowCard";
import { GlowButton } from "@/components/GlowButton";
import { BookOpen, Zap, Lightbulb, Heart } from "lucide-react";

export default function BookPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <Hero
        title="A New Chapter Is Forming"
        subtitle="A Written Transmission for the Awakening"
        backgroundSrc="/assets/warrior-membership.png"
        backgroundAlt="Book hero background"
      />

      <SectionDivider />

      {/* Book Teaser Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Book Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative h-[500px] w-[350px]">
                {/* Glowing book cover */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-pink-500/20 shadow-[0_0_60px_rgba(70,244,255,0.3), 0_0_100px_rgba(159,105,255,0.2)]"
                />
                <div className="absolute inset-0 rounded-2xl border border-cyan-200/30 shadow-[inset_0_0_30px_rgba(70,244,255,0.1)]" />

                {/* Book content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    className="mb-6"
                  >
                    <BookOpen className="h-16 w-16 text-cyan-300 mx-auto" />
                  </motion.div>

                  <h3 className="text-2xl font-black text-neon mb-4">
                    The Cosmic Path
                  </h3>

                  <p className="text-cyan-100/75 text-sm leading-relaxed mb-6">
                    A written transmission for those who feel the shift but don't yet have the language for it.
                  </p>

                  <div className="text-xs text-cyan-300/60 space-y-2">
                    <p className="font-semibold">Coming Soon</p>
                    <p className="text-cyan-400/80">📖 A message waiting to be born</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-black text-neon"
              >
                The Cosmic Path
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  This is not just a book. This is a transmission—a written journey for those who know there is more to this story than what they've been handed.
                </p>

                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  For the ones who feel the shift. For the ones who sense the awakening. For the ones who are ready to walk a path that others don't yet understand.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-cyan-300/10 flex items-center justify-center border border-cyan-200/30">
                        <Zap className="h-5 w-5 text-cyan-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-50">Awakening Through Words</h4>
                      <p className="text-cyan-100/70 text-sm">
                        Language that speaks to the part of you that already knows.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-400/30 to-violet-300/10 flex items-center justify-center border border-violet-200/30">
                        <Lightbulb className="h-5 w-5 text-violet-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-violet-50">Frameworks for Transformation</h4>
                      <p className="text-violet-100/70 text-sm">
                        Practical wisdom wrapped in cosmic insight.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-400/30 to-pink-300/10 flex items-center justify-center border border-pink-200/30">
                        <Heart className="h-5 w-5 text-pink-300" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-50">A Message of Remembering</h4>
                      <p className="text-pink-100/70 text-sm">
                        What you seek is already within you. This book helps you remember.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-violet-100/70 leading-relaxed italic pt-4">
                  "When the time is right, the words will arrive. And when they do, they will speak to the exact place in your soul that has been waiting for them."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Notification Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Darker cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />

        {/* Energy accents */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl opacity-30" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neon">
              Be Notified When It Drops
            </h2>

            <p className="text-xl text-cyan-100/80">
              Join the waiting ones. When this transmission is ready, you'll be among the first to receive it.
            </p>

            {/* Notification Form */}
            <form className="relative mt-8 space-y-4">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-pink-500/10 rounded-2xl blur-2xl" />

              <div className="relative space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-lg bg-slate-800/50 border border-cyan-200/20 text-cyan-50 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 transition-all duration-300"
                />

                <GlowButton type="submit" className="w-full justify-center px-6 py-4">
                  Notify Me
                </GlowButton>

                <p className="text-xs text-cyan-300/60">
                  We respect your privacy. You'll only hear from us when the book is ready.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Preview Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-black text-neon mb-12"
          >
            What Awaits Inside
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants}>
              <GlowCard glow="cyan">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-cyan-50">Part I: The Awakening</h3>
                  <p className="text-cyan-100/75 leading-relaxed">
                    Recognition. The moment you realize you've been searching for something you already possess.
                  </p>
                  <div className="pt-2 text-xs text-cyan-300/60">→ Chapters on consciousness, awareness, and the shift</div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard glow="violet">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-violet-50">Part II: The Practice</h3>
                  <p className="text-violet-100/75 leading-relaxed">
                    Tools, frameworks, and disciplines for embodying what you know to be true.
                  </p>
                  <div className="pt-2 text-xs text-violet-300/60">→ Practical guidance for daily transformation</div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlowCard glow="pink">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-pink-50">Part III: The Path Forward</h3>
                  <p className="text-pink-100/75 leading-relaxed">
                    The invitation. How to walk this path with others and become a beacon for awakening.
                  </p>
                  <div className="pt-2 text-xs text-pink-300/60">→ Your role in collective evolution</div>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-black text-neon">
              While You Wait
            </h3>
            <p className="text-lg text-cyan-100/75 max-w-2xl mx-auto">
              Explore the cosmic path with VelocityLeads. Join our community, access weekly signals, and prepare for what's coming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <GlowButton href="/signals" className="px-8 py-4 text-base">
                Listen to Signals
              </GlowButton>
              <GlowButton
                href="/membership"
                className="px-8 py-4 text-base border-violet-200/40 text-violet-50 shadow-[0_0_24px_rgba(159,105,255,0.26)] hover:shadow-[0_0_35px_rgba(159,105,255,0.45)]"
              >
                Join Warrior Membership
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
