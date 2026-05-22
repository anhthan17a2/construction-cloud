"use client";

import { useState, useEffect } from "react";
import { Search, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NotificationsDropdown } from "./notifications-dropdown";

export function AppHeader(_props: { user: { name?: string | null } }) {
  const { theme, setTheme } = useTheme();
  // mounted guard — prevents server/client mismatch for theme-dependent rendering
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="h-14 border-b flex items-center gap-3 px-5 flex-shrink-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex-1 max-w-xs">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Tìm dự án, bản vẽ..."
            className="h-8 pl-8 text-xs bg-muted/50"
          />
        </div>
      </div>
      <div className="flex items-center gap-1 ml-auto">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          suppressHydrationWarning
        >
          {/* Render Moon as placeholder until mounted to avoid hydration mismatch */}
          {mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
        <NotificationsDropdown />
      </div>
    </header>
  );
}
