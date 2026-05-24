"use client";

import { Languages, Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n/provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "icon" | "compact" | "full";
  className?: string;
}

export function LanguageSwitcher({ variant = "icon", className }: Props) {
  const { locale, setLocale, t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {variant === "icon" ? (
          <Button variant="ghost" size="icon" className={cn("h-9 w-9", className)} aria-label={t("common.language")}>
            <Languages className="w-4 h-4" />
          </Button>
        ) : variant === "compact" ? (
          <Button variant="ghost" size="sm" className={cn("gap-2 h-9", className)}>
            <Languages className="w-4 h-4" />
            <span className="text-xs font-medium uppercase">{locale}</span>
          </Button>
        ) : (
          <Button variant="outline" className={cn("gap-2 justify-start", className)}>
            <Languages className="w-4 h-4" />
            <span>{locale === "vi" ? t("common.vietnamese") : t("common.english")}</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        <DropdownMenuItem onClick={() => setLocale("vi")} className="gap-2">
          <span className="text-base leading-none">🇻🇳</span>
          <span className="flex-1">{t("common.vietnamese")}</span>
          {locale === "vi" && <Check className="w-3.5 h-3.5 text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("en")} className="gap-2">
          <span className="text-base leading-none">🇬🇧</span>
          <span className="flex-1">{t("common.english")}</span>
          {locale === "en" && <Check className="w-3.5 h-3.5 text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
