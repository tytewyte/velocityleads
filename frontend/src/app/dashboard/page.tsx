import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { SignOutButton } from "@/components/SignOutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cosmic-nebula-alt.jpg"
          alt="Dashboard background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/85 to-slate-950/90" />
      </div>

      <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-6 relative z-10">
      <div className="glow-card rounded-3xl p-8 md:p-12">
        <h1 className="text-4xl font-black text-neon">Member Dashboard</h1>
        <p className="mt-4 text-cyan-100/80">
          Welcome back, {session.user.name ?? session.user.email}. Your member-only command center is active.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Lead Reactor", "Offer Matrix", "Campaign Warp"].map((panel) => (
            <article key={panel} className="rounded-2xl border border-cyan-200/20 bg-black/30 p-4">
              <h2 className="font-semibold text-cyan-200">{panel}</h2>
              <p className="mt-2 text-sm text-cyan-100/70">Premium tools online and synchronized.</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <SignOutButton />
        </div>
      </div>
      </section>
    </div>
  );
}
