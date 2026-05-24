"use client";

import { useTranslation } from "@/lib/i18n/provider";
import { CreateProjectButton } from "./create-project-button";

export function ProjectsHeader({ count }: { count: number }) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-xl font-semibold">{t("project.pageTitle")}</h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          {count} {t("project.activeProjects")}
        </p>
      </div>
      <CreateProjectButton />
    </div>
  );
}
