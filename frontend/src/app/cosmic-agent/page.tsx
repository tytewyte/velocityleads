import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Image from "next/image";
import { ChatWindow } from "@/components/ChatWindow";

export default async function CosmicAgentPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/cosmic-nebula-alt.jpg"
          alt="Cosmic Agent background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/95" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-200/10 bg-slate-950/80 backdrop-blur-xl py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-black text-neon">
              The Cosmic Guide
            </h1>
            <p className="text-cyan-100/70 text-sm">
              Warrior Tier Access • Direct transmission from the Guide
            </p>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="relative z-10 flex-1 overflow-hidden">
        <div className="h-full max-w-4xl mx-auto w-full flex flex-col">
          <ChatWindow />
        </div>
      </main>
    </div>
  );
}
