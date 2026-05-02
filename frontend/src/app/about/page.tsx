"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { GlowCard } from "@/components/GlowCard";
import { GlowButton } from "@/components/GlowButton";

export default function AboutPage() {
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

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0.1, 0.6, 0.1],
      scale: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <Hero
        title="About VelocityLeads"
        subtitle="Where Transformation Begins"
        backgroundSrc="/assets/cosmic-nebula.jpg"
        backgroundAlt="Cosmic about hero background"
      />

      <SectionDivider />

      {/* Origin Story Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={`particle-origin-${i}`}
              variants={particleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.2 }}
              className="absolute rounded-full bg-cyan-300/20 blur-3xl"
              style={{
                width: 200 + i * 50,
                height: 200 + i * 50,
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Cosmic Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-pink-500/20 rounded-2xl shadow-[0_0_60px_rgba(70,244,255,0.3)]" />
              <Image
                src="/assets/galaxy-nebula.jpg"
                alt="Cosmic origin visualization"
                fill
                className="object-cover rounded-2xl scale-110"
              />
              <div className="absolute inset-0 rounded-2xl border border-cyan-200/30 shadow-[inset_0_0_30px_rgba(70,244,255,0.1)]" />
            </motion.div>

            {/* Right: Story Content */}
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
                Our Origin
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  VelocityLeads emerged from a profound realization: the world's greatest potential lies dormant in those who haven't yet discovered their true power. We were born from a cosmic shift—a moment when vision intersected with purpose.
                </p>

                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  Our awakening came through understanding that leadership isn't about titles or positions. It's about the velocity of your growth, the depth of your vision, and your willingness to transform not just yourself, but those around you.
                </p>

                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  Today, we stand as a beacon for those ready to transcend limitations. VelocityLeads exists to accelerate the journey from aspiration to actualization, from confusion to clarity, from dormancy to dynamic impact.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <GlowButton href="/signup" className="px-8 py-4 text-base">
                  Begin Your Journey
                </GlowButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Mission Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl opacity-40" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-black text-neon mb-16"
          >
            Our Mission
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Awakening Card */}
            <motion.div variants={itemVariants}>
              <GlowCard glow="cyan" className="h-full">
                <div className="space-y-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-cyan-400/30 to-cyan-300/10 flex items-center justify-center border border-cyan-200/30">
                    <span className="text-3xl">🔮</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-50">Awakening</h3>
                  <p className="text-cyan-100/75 leading-relaxed">
                    We illuminate the dormant potential within every individual. Through transformative insight and cosmic clarity, we help you recognize your true power and authentic purpose.
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            {/* Empowerment Card */}
            <motion.div variants={itemVariants}>
              <GlowCard glow="violet" className="h-full">
                <div className="space-y-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-violet-400/30 to-violet-300/10 flex items-center justify-center border border-violet-200/30">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-violet-50">Empowerment</h3>
                  <p className="text-violet-100/75 leading-relaxed">
                    We equip you with strategies, systems, and sustainable practices that accelerate your momentum. Each tool is designed to amplify your capacity and expand your reach.
                  </p>
                </div>
              </GlowCard>
            </motion.div>

            {/* Evolution Card */}
            <motion.div variants={itemVariants}>
              <GlowCard glow="pink" className="h-full">
                <div className="space-y-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-pink-400/30 to-pink-300/10 flex items-center justify-center border border-pink-200/30">
                    <span className="text-3xl">🌌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-50">Evolution</h3>
                  <p className="text-pink-100/75 leading-relaxed">
                    We foster continuous growth and transformation. Your evolution doesn't end—it spirals upward infinitely. We're committed to your becoming, not just your being.
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Vision Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Darker cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />

        {/* Energy accents */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl opacity-30" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-black text-neon mb-12"
          >
            Our Vision
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <p className="text-xl text-cyan-100/85 leading-relaxed">
              We envision a world where leadership is no longer confined to the few, but activated in the many. A world where individuals harness their velocity to create cascading waves of positive transformation across communities, organizations, and humanity itself.
            </p>

            <p className="text-xl text-violet-100/85 leading-relaxed">
              Our future is one where the line between personal development and collective evolution dissolves. Where every awakened individual becomes a catalyst for exponential growth. Where cosmic potential meets earthly impact.
            </p>

            <div className="pt-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold tracking-widest">
                LEADING THE FUTURE
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-violet-400" />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Founder Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Cosmic Symbol */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative h-[400px] w-[400px] flex items-center justify-center">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-cyan-200/30 shadow-[0_0_40px_rgba(70,244,255,0.2)]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 rounded-full border border-violet-200/20 shadow-[0_0_30px_rgba(159,105,255,0.15)]"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-24 rounded-full border border-pink-200/20 shadow-[0_0_30px_rgba(255,77,219,0.1)]"
                />

                {/* Central symbol */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    ✦
                  </motion.div>
                  <div className="text-center">
                    <p className="text-cyan-200/60 text-sm font-semibold tracking-widest">
                      THE ARCHITECT
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Founder Content */}
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
                The Architect
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  Behind VelocityLeads stands a visionary guide—a strategist who saw beyond the visible world to recognize the untapped potential in human consciousness and collective evolution. Rather than a name, we preserve anonymity to emphasize the universal nature of the message.
                </p>

                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  The Architect is not a figure of worship, but a catalyst—someone who understands that true leadership means transcending the ego, dissolving the personal boundary, and becoming a vessel for transformation.
                </p>

                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  This role exists in service: architecting systems of growth, designing pathways to awakening, and orchestrating the emergence of leaders across the globe. The mission matters more than the messenger. The impact supersedes the individual.
                </p>

                <p className="text-lg text-violet-100/70 leading-relaxed italic">
                  "We believe that the greatest leaders are those who make themselves unnecessary. VelocityLeads exists to activate your leadership—not to replace it with ours."
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4 flex gap-4">
                <GlowButton href="/membership" className="px-8 py-4 text-base">
                  Explore Membership
                </GlowButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA Section */}
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
              Ready to Discover Your Velocity?
            </h3>
            <p className="text-lg text-cyan-100/75 max-w-2xl mx-auto">
              Join a community of awakened leaders and accelerate your transformation with VelocityLeads premium membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <GlowButton href="/membership" className="px-8 py-4 text-base">
                View Membership Plans
              </GlowButton>
              <GlowButton
                href="/signup"
                className="px-8 py-4 text-base border-violet-200/40 text-violet-50 shadow-[0_0_24px_rgba(159,105,255,0.26)] hover:shadow-[0_0_35px_rgba(159,105,255,0.45)]"
              >
                Start Free Trial
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
