"use client";

import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

export function AnimatedText({ text, className }: { text: string, className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className={cn(
        "translate-y-[100%] opacity-0",
        mounted && "animate-[slideUp_0.5s_ease-out_forwards]"
      )}>
        {text}
      </div>
    </div>
  );
}