"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { I18nProvider } from "@/lib/i18n/provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <I18nProvider>{children}</I18nProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
