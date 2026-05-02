"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { GlowCard } from "@/components/GlowCard";
import { GlowButton } from "@/components/GlowButton";
import { Music, Lock, PlayCircle } from "lucide-react";

export default function SignalsPage() {
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

  const tracks = [
    {
      number: 1,
      title: "Signal of the Week",
      duration: "8:42",
      vibe: "Deep Focus • Cosmic Meditation",
      access: "public",
      description: "A track designed for stillness. For the mind that needs to settle. For the soul that remembers.",
    },
    {
      number: 2,
      title: "Frequency Resonance",
      duration: "12:15",
      vibe: "Ambient • Inner Alignment",
      access: "public",
      description: "When the noise fades, this is what remains. A frequency that speaks to the quiet within.",
    },
  ];

  const vaultTracks = [
    {
      title: "Cosmic Archive Session #1",
      duration: "15:30",
      vibe: "Deep Immersion",
      date: "Members Only",
    },
    {
      title: "Void Passage - Extended Mix",
      duration: "18:47",
      vibe: "Transcendent",
      date: "Members Only",
    },
    {
      title: "Silent Transmission",
      duration: "11:22",
      vibe: "Ethereal Presence",
      date: "Members Only",
    },
    {
      title: "Awakening Frequency",
      duration: "13:05",
      vibe: "Spiritual Activation",
      date: "Members Only",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <Hero
        title="Weekly Signals"
        subtitle="Public Tracks & The Cosmic Archive Vault"
        backgroundSrc="/assets/cosmic-nebula-alt.jpg"
        backgroundAlt="Signals hero background"
      />

      <SectionDivider />

      {/* Public Tracks Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neon mb-4">
              Two Tracks Open to Everyone
            </h2>
            <p className="text-xl text-cyan-100/80 max-w-3xl">
              Updated weekly. No paywall. No gatekeeping. These are public signals—frequencies released freely to anyone who feels called to listen.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {tracks.map((track, index) => (
              <motion.div key={track.number} variants={itemVariants}>
                <GlowCard glow={index === 0 ? "cyan" : "violet"} className="h-full">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm font-semibold text-cyan-300 tracking-widest mb-2">
                          WEEK {track.number}
                        </div>
                        <h3 className="text-2xl font-bold text-cyan-50">
                          {track.title}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400/30 to-cyan-300/10 flex items-center justify-center border border-cyan-200/30">
                          <Music className="h-5 w-5 text-cyan-300" />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cyan-100/75 leading-relaxed">
                      {track.description}
                    </p>

                    {/* Metadata */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-cyan-200/60">{track.duration}</span>
                        <span className="text-cyan-300 font-semibold">{track.vibe}</span>
                      </div>
                      <div className="h-1 w-full bg-cyan-300/10 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full" />
                      </div>
                    </div>

                    {/* Action */}
                    <GlowButton href="#" className="w-full justify-center px-6 py-3">
                      <PlayCircle className="h-4 w-4 mr-2" />
                      Listen Now
                    </GlowButton>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-cyan-100/70 italic">
              New signals drop every Monday. Stay tuned to the frequency.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Cosmic Archive Vault Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Darker cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />

        {/* Energy accents */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl opacity-30" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neon mb-4">
              The Cosmic Archive Vault
            </h2>
            <p className="text-xl text-cyan-100/80 max-w-3xl">
              Deep cuts. Alternate versions. Extended sessions. Unreleased transmissions. All available exclusively to Warrior Members.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {vaultTracks.map((track) => (
              <motion.div key={track.title} variants={itemVariants}>
                <GlowCard glow="multi" className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-violet-50 mb-1">
                        {track.title}
                      </h4>
                      <p className="text-sm text-violet-200/60">{track.vibe}</p>
                    </div>
                    <Lock className="h-5 w-5 text-violet-400 flex-shrink-0 ml-2" />
                  </div>

                  <p className="text-violet-100/70 text-sm mb-4 flex-1">
                    {track.duration} • {track.date}
                  </p>

                  <div className="pt-4 border-t border-violet-200/10">
                    <p className="text-xs text-violet-300/60">
                      ✦ Members Only • Warrior Access
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 rounded-2xl border border-violet-200/20 bg-violet-500/5"
          >
            <h3 className="text-2xl font-bold text-violet-50 mb-3">
              Unlock the Full Archive
            </h3>
            <p className="text-violet-100/75 mb-6 max-w-2xl mx-auto">
              The Cosmic Archive Vault contains the complete collection of sessions, deep cuts, and cosmic transmissions. Available only to Warrior Members.
            </p>
            <GlowButton href="/membership" className="px-8 py-4">
              Become a Warrior
            </GlowButton>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Experience Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-black text-neon">
              How to Use These Signals
            </h3>

            <div className="space-y-4 text-left">
              <div className="p-6 rounded-xl border border-cyan-200/20 bg-cyan-500/5">
                <h4 className="font-semibold text-cyan-50 mb-2">🎧 Deep Focus</h4>
                <p className="text-cyan-100/75">
                  Play during meditation, work, or moments when you need to access clarity and inner stillness.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-violet-200/20 bg-violet-500/5">
                <h4 className="font-semibold text-violet-50 mb-2">✨ Spiritual Activation</h4>
                <p className="text-violet-100/75">
                  These frequencies are designed to activate dormant parts of your awareness and consciousness.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-pink-200/20 bg-pink-500/5">
                <h4 className="font-semibold text-pink-50 mb-2">🌌 Cosmic Immersion</h4>
                <p className="text-pink-100/75">
                  Surrender to the transmission. Let it move through you. The vault sessions are portals.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <GlowButton href="/" className="px-8 py-4">
                Back to Home
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
