"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GlowButton } from "@/components/GlowButton";

export function SignupForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      setMessage(payload.message ?? "Could not create account.");
      setLoading(false);
      return;
    }

    const loginResult = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false,
    });

    setLoading(false);
    if (loginResult?.error) {
      router.push("/login");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="glow-card rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-neon">Signup</h1>
      <div className="mt-6 space-y-4">
        <input
          name="name"
          type="text"
          required
          placeholder="Full name"
          className="w-full rounded-xl border border-cyan-200/20 bg-black/30 px-4 py-3 text-cyan-50 outline-none focus:border-cyan-300"
        />
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
          minLength={6}
          required
          placeholder="Password (min 6 chars)"
          className="w-full rounded-xl border border-cyan-200/20 bg-black/30 px-4 py-3 text-cyan-50 outline-none focus:border-cyan-300"
        />
      </div>
      {message ? <p className="mt-4 text-sm text-pink-300">{message}</p> : null}
      <div className="mt-6">
        <GlowButton type="submit" className="w-full">
          {loading ? "Creating account..." : "Create account"}
        </GlowButton>
      </div>
    </form>
  );
}
