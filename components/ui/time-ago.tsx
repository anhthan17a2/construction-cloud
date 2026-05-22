"use client";

import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

// Fixes SSR/client hydration mismatch — time strings differ between server and client render
export function TimeAgo({ date, className }: { date: Date | string; className?: string }) {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const d = new Date(date);
    setText(formatDistanceToNow(d, { addSuffix: true }));
    const interval = setInterval(() => {
      setText(formatDistanceToNow(d, { addSuffix: true }));
    }, 60000);
    return () => clearInterval(interval);
  }, [date]);

  // Render empty on server, fill on client — suppressHydrationWarning prevents React warning
  return (
    <span className={className} suppressHydrationWarning>
      {text}
    </span>
  );
}
