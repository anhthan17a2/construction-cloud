"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

interface I18nContext {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
}

const Ctx = createContext<I18nContext | null>(null);

const STORAGE_KEY = "cc_locale";

function getNested(obj: unknown, path: string): string {
  const keys = path.split(".");
  let cur: unknown = obj;
  for (const k of keys) {
    if (cur && typeof cur === "object" && k in cur) cur = (cur as Record<string, unknown>)[k];
    else return path;
  }
  return typeof cur === "string" ? cur : path;
}

function interpolate(s: string, vars?: Record<string, string | number>): string {
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "vi" || stored === "en") setLocaleState(stored);
    } catch {}
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  }, []);

  const t = useCallback(
    (path: string, vars?: Record<string, string | number>) =>
      interpolate(getNested(dictionaries[locale] as unknown as Dictionary, path), vars),
    [locale]
  );

  return <Ctx.Provider value={{ locale, setLocale, t }}>{children}</Ctx.Provider>;
}

export function useTranslation() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    // SSR / outside provider fallback — returns English keys verbatim
    return {
      locale: "vi" as Locale,
      setLocale: () => {},
      t: (path: string) => path,
    };
  }
  return ctx;
}
