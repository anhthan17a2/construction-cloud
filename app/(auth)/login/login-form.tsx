"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Eye, EyeOff, Loader2, CheckCircle2, FileText, AlertCircle, HardHat, Layers, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/provider";
import { LanguageSwitcher } from "@/components/language-switcher";

const schema = z.object({
  email:    z.string().email(),
  password: z.string().min(6),
});
type FormData = z.infer<typeof schema>;

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export function LoginForm() {
  const router      = useRouter();
  const params      = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";
  const { t }       = useTranslation();
  const [showPw,        setShowPw]        = useState(false);
  const [error,         setError]         = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const FEATURES = [
    { icon: Layers,      text: t("auth.features.drawings") },
    { icon: AlertCircle, text: t("auth.features.issues") },
    { icon: HardHat,     text: t("auth.features.field") },
    { icon: FileText,    text: t("auth.features.reports") },
    { icon: Shield,      text: t("auth.features.access") },
  ];

  const STATS = [
    { value: "200+",  label: t("auth.stats.projects") },
    { value: "50K+",  label: t("auth.stats.drawings") },
    { value: "99.9%", label: t("auth.stats.uptime") },
  ];

  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError("");
    const res = await signIn("credentials", { email: data.email, password: data.password, redirect: false });
    if (res?.error) { setError(t("auth.loginFailed")); return; }
    router.push(callbackUrl);
    router.refresh();
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl });
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-zinc-950">

      {/* ── Left panel ─────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex w-[52%] relative overflow-hidden flex-col">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a]" />

        {/* Blueprint grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5"/>
            </pattern>
            <pattern id="gridBig" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#60a5fa" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#gridBig)" />
        </svg>

        {/* Glow accent */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-12">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-auto">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-tight">ConstructionCloud</span>
              <div className="text-blue-400 text-[10px] font-medium tracking-widest uppercase">{t("auth.tagline")}</div>
            </div>
          </div>

          {/* Hero text */}
          <div className="my-12">
            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              {t("auth.heroTitle1")}<br />
              <span className="text-blue-400">{t("auth.heroTitle2")}</span><br />
              {t("auth.heroTitle3")}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              {t("auth.heroSubtitle")}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-12">
            {FEATURES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-slate-300 text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-slate-400 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-slate-400 text-xs">{t("auth.trustBadge")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel ────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900 relative">
        {/* Language switcher (top right) */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher variant="compact" />
        </div>

        <div className="w-full max-w-[380px]">

          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 mb-10 lg:hidden">
            <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <span className="font-bold text-lg">ConstructionCloud</span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1.5">{t("auth.loginWelcome")}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">{t("auth.loginSubtitle")}</p>
          </div>

          {/* Google button */}
          <button
            type="button"
            onClick={handleGoogle}
            disabled={googleLoading || isSubmitting}
            className={cn(
              "w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700",
              "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium text-sm",
              "hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors shadow-sm",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {googleLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <GoogleIcon />}
            {t("auth.continueGoogle")}
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-zinc-50 dark:bg-zinc-900 px-3 text-xs text-zinc-400">{t("auth.orLoginEmail")}</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                autoComplete="email"
                className={cn(
                  "h-10 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl",
                  errors.email && "border-red-400 focus-visible:ring-red-400"
                )}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />{t("auth.invalidEmail")}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {t("auth.password")}
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className={cn(
                    "h-10 pr-10 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 rounded-xl",
                    errors.password && "border-red-400 focus-visible:ring-red-400"
                  )}
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />{t("auth.passwordMin")}
                </p>
              )}
            </div>

            {error && (
              <div className="flex items-center gap-2.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 px-4 py-3">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm shadow-blue-500/20 transition-colors"
              disabled={isSubmitting || googleLoading}
            >
              {isSubmitting
                ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{t("auth.loggingIn")}</>
                : t("auth.loginTitle")}
            </Button>
          </form>

          {/* Footer links */}
          <p className="text-center text-sm text-zinc-500 mt-6">
            {t("auth.noAccount")}{" "}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
              {t("auth.register")}
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
