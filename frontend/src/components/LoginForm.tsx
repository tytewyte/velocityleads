"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GlowButton } from "@/components/GlowButton";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);

    const result = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="glow-card rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-neon">Login</h1>
      <div className="mt-6 space-y-4">
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-xl border border-cyan-200/20 bg-black/30 px-4 py-3 text-cyan-50 outline-none focus:border-cyan-300"
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          className="w-full rounded-xl border border-cyan-200/20 bg-black/30 px-4 py-3 text-cyan-50 outline-none focus:border-cyan-300"
        />
      </div>
      {error ? <p className="mt-4 text-sm text-pink-300">{error}</p> : null}
      <div className="mt-6">
        <GlowButton type="submit" className="w-full">
          {loading ? "Authenticating..." : "Login to Dashboard"}
        </GlowButton>
      </div>
    </form>
  );
}
