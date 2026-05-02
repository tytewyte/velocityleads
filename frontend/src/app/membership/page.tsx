"use client";

import Image from "next/image";
import { Sparkles, Shield, Orbit } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { GlowButton } from "@/components/GlowButton";
import { BenefitCard } from "@/components/BenefitCard";
import { TierCard } from "@/components/TierCard";

export default function MembershipPage() {
  return (
    <div className="pb-14">
      <Hero
        title="Warrior Membership"
        subtitle="Awaken the Shift. Lead the Future."
        ctaLabel="Join the Movement"
        ctaHref="/signup"
        backgroundSrc="/assets/warrior-membership.png"
        backgroundAlt="Warrior membership cosmic background"
      />

      <SectionDivider />
      <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl px-4 py-20 md:px-6">
        <Image
          src="/assets/membership-1.png"
          alt="Membership cosmic atmosphere"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050812]/90 to-[#050812]/95" />
        <div className="relative">
        <h2 className="text-center text-3xl font-black text-neon md:text-4xl">Benefits of Joining</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-cyan-100/75">
          Gain elite tools, mentorship, and frameworks engineered to accelerate your trajectory.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <BenefitCard
            title="Quantum Lead Engine"
            description="Access high-intent prospect systems designed to convert faster with less friction."
            icon={Sparkles}
          />
          <BenefitCard
            title="Command-Level Strategy"
            description="Receive tactical launch blueprints and growth sequences used by top operators."
            icon={Orbit}
            delay={0.1}
          />
          <BenefitCard
            title="Protected Advantage"
            description="Member-first releases and private archives keep you steps ahead of the market."
            icon={Shield}
            delay={0.2}
          />
        </div>
        </div>
      </section>
      <SectionDivider />

      <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl px-4 py-20 md:px-6">
        <Image
          src="/assets/membership-2.png"
          alt="Neon membership texture"
          fill
          className="object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040714]/95 via-[#040714]/90 to-[#040714]/95" />
        <div className="relative">
        <h2 className="text-3xl font-black text-neon md:text-4xl">What&apos;s Included</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Weekly AI playbooks",
            "Private implementation vault",
            "Live growth strategy calls",
            "Conversion copy frameworks",
            "Futuristic campaign dashboards",
            "Priority member support",
          ].map((item) => (
            <article
              key={item}
              className="rounded-xl border border-cyan-200/25 bg-black/35 p-5 text-cyan-50 transition-all duration-300 hover:border-fuchsia-300/70 hover:shadow-[0_0_28px_rgba(159,105,255,0.35)]"
            >
              {item}
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-200/25">
          <Image
            src="/assets/preview-screen.png"
            alt="Cosmic archive vault preview"
            width={1600}
            height={900}
            className="h-[300px] w-full object-cover md:h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-[#050812]/65 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <h2 className="text-3xl font-black text-neon md:text-5xl">Exclusive Content Preview</h2>
            <p className="mt-3 max-w-2xl text-cyan-100/85">
              Peek into the Cosmic Archive Vault: private launch strategies, operator templates, and member-only intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-20 md:px-6">
        <h2 className="text-center text-3xl font-black text-neon md:text-4xl">Pricing</h2>
        <div className="mt-10">
          <TierCard
            title="Warrior"
            price="$4.99"
            description="One elite tier. Full access to the VelocityLeads membership ecosystem."
            features={[
              "All benefits and vault access",
              "Member dashboard and weekly drops",
              "Priority strategy and support",
              "Cancel anytime",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto mt-4 w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl border border-cyan-200/15 bg-black/25 px-6 py-5 text-center text-sm text-cyan-100/65 shadow-[0_0_25px_rgba(70,244,255,0.08)]">
          The warrior path is not crowded. It&apos;s illuminated.
          <div className="mt-3">
            <GlowButton href="/signup" className="px-6 py-2 text-sm">
              Join the Movement
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
}
