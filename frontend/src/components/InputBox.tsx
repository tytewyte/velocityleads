"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type InputBoxProps = {
  onSend: (message: string) => void;
  isLoading: boolean;
};

export function InputBox({ onSend, isLoading }: InputBoxProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full border-t border-cyan-200/10 bg-slate-900/80 backdrop-blur-xl p-4"
    >
      <div className="flex gap-3 items-end max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e as any);
              }
            }}
            placeholder="Speak to the Guide..."
            disabled={isLoading}
            rows={1}
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-200/20 text-cyan-50 placeholder-cyan-300/40 focus:outline-none focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 transition-all duration-300 disabled:opacity-50 resize-none max-h-24 overflow-y-auto"
          />
          <p className="text-xs text-cyan-300/50 mt-2">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isLoading || !input.trim()}
          className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-400/30 to-cyan-300/10 border border-cyan-200/30 flex items-center justify-center text-cyan-300 hover:shadow-[0_0_20px_rgba(70,244,255,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
        </motion.button>
      </div>
    </form>
  );
}
