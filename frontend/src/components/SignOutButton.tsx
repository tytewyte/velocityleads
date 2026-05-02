"use client";

import { signOut } from "next-auth/react";
import { GlowButton } from "@/components/GlowButton";

export function SignOutButton() {
  return (
    <GlowButton onClick={() => signOut({ callbackUrl: "/" })} className="px-4 py-2 text-sm">
      Sign Out
    </GlowButton>
  );
}
