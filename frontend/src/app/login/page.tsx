import Image from "next/image";
import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/membership-1.png"
          alt="Membership background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/70 to-slate-950/80" />
      </div>

      <section className="mx-auto flex w-full max-w-lg px-4 py-20 md:px-6 relative z-10">
        <LoginForm />
      </section>
    </div>
  );
}
