"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Building2, Phone, Lock, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getInitials } from "@/lib/utils";

const profileSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  title: z.string().optional(),
  phone: z.string().optional(),
});
type ProfileForm = z.infer<typeof profileSchema>;

interface Props {
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    company: string | null;
    title: string | null;
    phone: string | null;
    role: string;
  };
}

export function SettingsModule({ user }: Props) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name ?? "",
      company: user.company ?? "",
      title: user.title ?? "",
      phone: user.phone ?? "",
    },
  });

  const onSubmit = async (data: ProfileForm) => {
    await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    router.refresh();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-xl font-semibold">Cài đặt tài khoản</h1>

      {/* Avatar */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Ảnh đại diện</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.image ?? undefined} />
            <AvatarFallback className="bg-primary text-white text-lg">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
            <p className="text-xs text-muted-foreground mt-0.5 capitalize">{user.role.toLowerCase().replace("_", " ")}</p>
          </div>
        </CardContent>
      </Card>

      {/* Profile form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <User className="w-4 h-4" /> Thông tin cá nhân
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label>Họ và tên</Label>
                <Input className="mt-1.5" {...register("name")} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" /> Công ty
                </Label>
                <Input className="mt-1.5" placeholder="INTECH Group" {...register("company")} />
              </div>
              <div>
                <Label>Chức danh</Label>
                <Input className="mt-1.5" placeholder="MEP Engineer" {...register("title")} />
              </div>
              <div>
                <Label className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Số điện thoại
                </Label>
                <Input className="mt-1.5" placeholder="0912 345 678" {...register("phone")} />
              </div>
              <div>
                <Label>Email</Label>
                <Input className="mt-1.5" value={user.email ?? ""} disabled />
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> Đang lưu...</>
                ) : "Lưu thay đổi"}
              </Button>
              {saved && (
                <span className="text-sm text-green-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Đã lưu
                </span>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <Lock className="w-4 h-4" /> Bảo mật
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Đổi mật khẩu của bạn để bảo vệ tài khoản.
          </p>
          <Button variant="outline" size="sm">Đổi mật khẩu</Button>
        </CardContent>
      </Card>
    </div>
  );
}
