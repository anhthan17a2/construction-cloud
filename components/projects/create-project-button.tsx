"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useTranslation } from "@/lib/i18n/provider";

const schema = z.object({
  name: z.string().min(3),
  location: z.string().optional(),
  client: z.string().optional(),
  description: z.string().optional(),
  color: z.string().default("#0EA5E9"),
});
type FormData = z.infer<typeof schema>;

const COLORS = [
  "#0EA5E9", "#8B5CF6", "#22C55E", "#EF4444",
  "#F59E0B", "#EC4899", "#14B8A6", "#64748B",
];

export function CreateProjectButton() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedColor = watch("color");

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const { data: project } = await res.json();
      reset();
      setOpen(false);
      router.push(`/projects/${project.id}`);
      router.refresh();
    }
  };

  return (
    <>
      <Button size="sm" onClick={() => setOpen(true)}>
        <Plus className="w-4 h-4 mr-1.5" /> {t("project.newProject")}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t("project.createTitle")}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4 py-2">
              <div>
                <Label>{t("project.projectName")} *</Label>
                <Input
                  placeholder={t("project.projectNamePh")}
                  className="mt-1.5"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{t("project.projectNameErr")}</p>
                )}
              </div>
              <div>
                <Label>{t("project.location")}</Label>
                <Input
                  placeholder={t("project.locationPh")}
                  className="mt-1.5"
                  {...register("location")}
                />
              </div>
              <div>
                <Label>{t("project.client")}</Label>
                <Input
                  placeholder={t("project.clientPh")}
                  className="mt-1.5"
                  {...register("client")}
                />
              </div>
              <div>
                <Label>{t("project.descLabel")}</Label>
                <Textarea
                  placeholder={t("project.descPh")}
                  className="mt-1.5 resize-none"
                  rows={2}
                  {...register("description")}
                />
              </div>
              <div>
                <Label>{t("project.projectColor")}</Label>
                <div className="flex gap-2 mt-2">
                  {COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setValue("color", c)}
                      className={`w-7 h-7 rounded-full transition-transform ${
                        selectedColor === c ? "scale-125 ring-2 ring-offset-2 ring-offset-background ring-white/30" : ""
                      }`}
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                {t("common.cancel")}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> {t("project.creating")}</>
                ) : (
                  t("project.createProject")
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
