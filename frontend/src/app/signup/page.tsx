import Image from "next/image";
import { SignupForm } from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/warrior-membership.png"
          alt="Signup background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/75 to-slate-950/85" />
      </div>

      <section className="mx-auto flex w-full max-w-lg px-4 py-20 md:px-6 relative z-10">
        <SignupForm />
      </section>
    </div>
  );
}
