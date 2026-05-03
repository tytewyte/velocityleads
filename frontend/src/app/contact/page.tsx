"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { GlowButton } from "@/components/GlowButton";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
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
        title="Get In Touch"
        subtitle="Your Message Matters"
        backgroundSrc="/assets/cosmic-energy-horizontal.png"
        backgroundAlt="Contact hero background"
        ctaLabel="Send Message"
        ctaHref="#contact-form"
      />

      <SectionDivider />

      {/* Main Contact Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        // @ts-ignore
        <motion.div
            animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-black text-neon mb-4">
                  Reach Out
                </h2>
                <p className="text-lg text-cyan-100/80 leading-relaxed">
                  Have a question, collaboration idea, or something you feel called to share? Your message carries weight. We listen, we respond, and we honor the connection.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400/30 to-cyan-300/10 flex items-center justify-center border border-cyan-200/30">
                      <Mail className="h-6 w-6 text-cyan-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-50 mb-2">Email</h3>
                    <a
                      href="mailto:contactavantaisolutions@protonmail.com"
                      className="text-cyan-200/80 hover:text-cyan-100 transition-colors duration-300"
                    >
                      contactavantaisolutions@protonmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-400/30 to-violet-300/10 flex items-center justify-center border border-violet-200/30">
                      <Send className="h-6 w-6 text-violet-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-violet-50 mb-2">Response Time</h3>
                    <p className="text-violet-100/75">
                      We respond within 24-48 hours. Your message deserves thoughtful attention.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4 space-y-4 text-cyan-100/70 text-sm">
                <p>
                  "The connections we make are not accidents. They are signals. Calls to presence. Invitations to something deeper."
                </p>
                <p>
                  We're here to listen — to your questions, your insights, and the part of you that feels called to this path.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              id="contact-form"
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-pink-500/10 rounded-2xl blur-2xl" />

              <form className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-200/20 rounded-2xl p-8 space-y-6 shadow-[0_0_40px_rgba(70,244,255,0.15)]">
                <div>
                  <label className="block text-sm font-semibold text-cyan-200 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-200/20 text-cyan-50 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-200 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-200/20 text-cyan-50 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-200 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-200/20 text-cyan-50 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cyan-200 mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Share your thoughts, questions, or insights..."
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-200/20 text-cyan-50 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 transition-all duration-300 resize-none"
                  />
                </div>

                <GlowButton
                  type="submit"
                  className="w-full px-6 py-3 text-base justify-center"
                >
                  Send Message
                </GlowButton>

                <p className="text-xs text-cyan-300/60 text-center">
                  Your message is secure and valued.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
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
              Not Ready to Reach Out Yet?
            </h3>
            <p className="text-lg text-cyan-100/75 max-w-2xl mx-auto">
              Explore VelocityLeads, join our community, or become a Warrior member and access deeper conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <GlowButton href="/membership" className="px-8 py-4 text-base">
                Explore Membership
              </GlowButton>
              <GlowButton
                href="/"
                className="px-8 py-4 text-base border-violet-200/40 text-violet-50 shadow-[0_0_24px_rgba(159,105,255,0.26)] hover:shadow-[0_0_35px_rgba(159,105,255,0.45)]"
              >
                Back to Home
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
