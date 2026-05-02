"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MessageBubbleProps = {
  role: "user" | "agent";
  content: string;
  timestamp?: Date;
};

export function MessageBubble({ role, content, timestamp }: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-xs px-4 py-3 rounded-lg text-sm leading-relaxed",
          isUser
            ? "bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-fuchsia-500/20 border border-cyan-200/30 text-cyan-50 rounded-br-none"
            : "bg-slate-800/60 border border-cyan-200/15 text-cyan-100/85 rounded-bl-none shadow-[0_0_20px_rgba(70,244,255,0.1)]"
        )}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
        {timestamp && (
          <p className="text-xs mt-2 opacity-50">
            {timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
    </motion.div>
  );
}
