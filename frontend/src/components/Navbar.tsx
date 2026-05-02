import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { GlowButton } from "@/components/GlowButton";

const links = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/signals", label: "Signals" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

export async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060813]/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-bold tracking-widest text-neon">
          VELOCITYLEADS
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cyan-50/85 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
          {session?.user && (
            <Link
              href="/cosmic-agent"
              className="text-sm text-violet-200/85 transition-colors hover:text-violet-300 font-semibold"
            >
              Cosmic Guide
            </Link>
          )}
          {session?.user ? (
            <GlowButton href="/dashboard" className="px-4 py-2 text-xs">
              Dashboard
            </GlowButton>
          ) : (
            <GlowButton href="/signup" className="px-4 py-2 text-xs">
              Join
            </GlowButton>
          )}
        </div>
      </nav>
    </header>
  );
}
