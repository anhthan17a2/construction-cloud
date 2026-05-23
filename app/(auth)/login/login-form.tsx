"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Building2, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const schema = z.object({
  email:    z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
});
type FormData = z.infer<typeof schema>;

// ── Google SVG icon ───────────────────────────────────────────────────────────
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
  const [showPw,    setShowPw]    = useState(false);
  const [error,     setError]     = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError("");
    const res = await signIn("credentials", { email: data.email, password: data.password, redirect: false });
    if (res?.error) { setError("Email hoặc mật khẩu không đúng"); return; }
    router.push(callbackUrl);
    router.refresh();
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl });
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left hero panel */}
      <div className="hidden lg:flex w-1/2 bg-sidebar flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">ConstructionCloud</span>
        </div>
        <div>
          <blockquote className="text-sidebar-foreground/70 text-xl leading-relaxed mb-6">
            "Quản lý bản vẽ và cộng tác thực địa cho đội ngũ MEP chuyên nghiệp."
          </blockquote>
          <div className="flex gap-2 flex-wrap">
            {["Sheets","Issues","RFIs","Punch List","Field Reports"].map((f) => (
              <span key={f} className="text-xs px-3 py-1 rounded-full bg-sidebar-accent text-sidebar-foreground">{f}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[{v:"200+",l:"Dự án"},{v:"50K+",l:"Bản vẽ"},{v:"12K+",l:"Issue đã xử lý"}].map(s => (
            <div key={s.l} className="bg-sidebar-accent rounded-xl p-4">
              <div className="text-2xl font-bold text-white">{s.v}</div>
              <div className="text-xs text-sidebar-foreground/60 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">ConstructionCloud</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">Đăng nhập</h1>
          <p className="text-muted-foreground text-sm mb-6">
            Chào mừng trở lại. Tiếp tục với tài khoản của bạn.
          </p>

          {/* Google sign-in */}
          <Button
            type="button"
            variant="outline"
            className="w-full mb-4 gap-2 font-medium"
            onClick={handleGoogle}
            disabled={googleLoading || isSubmitting}
          >
            {googleLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <GoogleIcon />}
            Tiếp tục với Google
          </Button>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs text-muted-foreground">
              <span className="bg-background px-2">hoặc đăng nhập bằng email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@company.com" autoComplete="email"
                className={cn(errors.email && "border-destructive")} {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mật khẩu</Label>
              </div>
              <div className="relative">
                <Input id="password" type={showPw ? "text" : "password"} placeholder="••••••••"
                  autoComplete="current-password"
                  className={cn("pr-10", errors.password && "border-destructive")} {...register("password")} />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
            </div>

            {error && (
              <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting || googleLoading}>
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Đang đăng nhập...</> : "Đăng nhập"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Chưa có tài khoản?{" "}
            <Link href="/register" className="text-primary hover:underline font-medium">Đăng ký</Link>
          </p>

          <p className="text-center text-xs text-muted-foreground mt-3 pb-2">
            Demo: <span className="font-medium text-foreground">admin@demo.com</span>
            {" / "}
            <span className="font-medium text-foreground">Admin@123</span>
          </p>
        </div>
      </div>
    </div>
  );
}
