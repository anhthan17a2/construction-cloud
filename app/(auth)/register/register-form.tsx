"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Building2, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const schema = z.object({
  name:    z.string().min(2, "Tên tối thiểu 2 ký tự"),
  email:   z.string().email("Email không hợp lệ"),
  company: z.string().min(2, "Nhập tên công ty / tổ chức"),
  password: z.string().min(8, "Mật khẩu tối thiểu 8 ký tự"),
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

export function RegisterForm() {
  const router  = useRouter();
  const params  = useSearchParams();
  const invite  = params.get("invite"); // invitation token
  const [showPw, setShowPw] = useState(false);
  const [error,  setError]  = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, inviteToken: invite }),
    });
    if (!res.ok) {
      const json = await res.json();
      setError(json.error || "Đăng ký thất bại");
      return;
    }

    const loginRes = await signIn("credentials", {
      email: data.email, password: data.password, redirect: false,
    });
    if (loginRes?.ok) { router.push("/"); router.refresh(); }
    else               { router.push("/login"); }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl: invite ? `/?invite=${invite}` : "/" });
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left hero */}
      <div className="hidden lg:flex w-1/2 bg-sidebar flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">ConstructionCloud</span>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Quản lý MEP<br/>chuyên nghiệp</h2>
          <p className="text-sidebar-foreground/70 leading-relaxed">
            Nền tảng quản lý bản vẽ thi công, theo dõi issue hiện trường và cộng tác kỹ thuật
            dành riêng cho đội ngũ MEP. Hỗ trợ đa công ty.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[{v:"10+",l:"Modules"},{v:"8",l:"Disciplines"},{v:"✓",l:"Realtime"},{v:"✓",l:"Mobile"}].map(s=>(
            <div key={s.l} className="bg-sidebar-accent rounded-xl p-4 text-center">
              <div className="text-xl font-bold text-white">{s.v}</div>
              <div className="text-xs text-sidebar-foreground/60 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">ConstructionCloud</span>
          </div>

          <h1 className="text-2xl font-bold mb-1">
            {invite ? "Chấp nhận lời mời" : "Tạo tài khoản"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {invite
              ? "Điền thông tin để tham gia tổ chức."
              : "Đăng ký miễn phí. Không cần thẻ tín dụng."}
          </p>

          {/* Google */}
          <Button type="button" variant="outline" className="w-full mb-4 gap-2 font-medium"
            onClick={handleGoogle} disabled={googleLoading || isSubmitting}>
            {googleLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <GoogleIcon />}
            Đăng ký với Google
          </Button>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs text-muted-foreground">
              <span className="bg-background px-2">hoặc đăng ký bằng email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1.5">
              <Label>Họ và tên</Label>
              <Input placeholder="Nguyễn Văn A"
                className={cn(errors.name && "border-destructive")} {...register("name")} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input type="email" placeholder="name@company.com"
                className={cn(errors.email && "border-destructive")} {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label>Tên công ty / tổ chức</Label>
              <Input placeholder="Công ty TNHH ABC" {...register("company")}
                className={cn(errors.company && "border-destructive")} />
              {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
              <p className="text-[11px] text-muted-foreground">Sẽ tạo workspace riêng cho công ty bạn</p>
            </div>

            <div className="space-y-1.5">
              <Label>Mật khẩu</Label>
              <div className="relative">
                <Input type={showPw ? "text" : "password"} placeholder="Tối thiểu 8 ký tự"
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
              {isSubmitting
                ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Đang tạo tài khoản...</>
                : "Tạo tài khoản"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Đã có tài khoản?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
