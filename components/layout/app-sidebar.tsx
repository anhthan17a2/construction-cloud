"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Building2,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronRight,
  Bell,
} from "lucide-react";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/lib/i18n/provider";
import { LanguageSwitcher } from "@/components/language-switcher";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

export function AppSidebar({ user }: { user: { id?: string; name?: string | null; email?: string | null; image?: string | null } }) {
  const pathname = usePathname();
  const { t } = useTranslation();

  const topNav: NavItem[] = [
    { label: t("nav.projects"), href: "/", icon: LayoutDashboard },
  ];

  const bottomNav: NavItem[] = [
    { label: t("common.settings"), href: "/settings",      icon: Settings },
    { label: t("nav.team"),        href: "/settings/team", icon: Users    },
  ];

  return (
    <aside className="w-[220px] flex-shrink-0 flex flex-col bg-sidebar border-r border-sidebar-border overflow-hidden">
      {/* Logo */}
      <div className="h-14 flex items-center gap-2.5 px-4 border-b border-sidebar-border flex-shrink-0">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
          <Building2 className="w-4 h-4 text-white" />
        </div>
        <span className="text-sidebar-foreground font-semibold text-[13px] truncate">
          ConstructionCloud
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 overflow-y-auto space-y-0.5">
        {topNav.map((item) => (
          <NavLink key={item.href} item={item} pathname={pathname} />
        ))}

        <div className="pt-2 pb-1 px-2">
          <span className="text-[10px] font-semibold text-sidebar-foreground/40 uppercase tracking-wider">
            {t("common.settings")}
          </span>
        </div>
        {[
          { label: t("nav.adminPanel"), href: "/admin", icon: Users },
        ].map((item) => (
          <NavLink key={item.href} item={item} pathname={pathname} />
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-sidebar-border px-2 py-2 space-y-0.5 flex-shrink-0">
        {bottomNav.map((item) => (
          <NavLink key={item.href} item={item} pathname={pathname} />
        ))}

        {/* Language switcher */}
        <div className="px-1 py-1">
          <LanguageSwitcher variant="full" className="w-full bg-transparent border-sidebar-border text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground text-[12.5px] h-8" />
        </div>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-sidebar-accent transition-colors group">
              <Avatar className="w-7 h-7 flex-shrink-0">
                <AvatarImage src={user.image ?? undefined} />
                <AvatarFallback className="text-[10px] bg-primary text-white">
                  {getInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 text-left">
                <div className="text-[12px] font-medium text-sidebar-foreground truncate">
                  {user.name || "User"}
                </div>
                <div className="text-[10px] text-sidebar-foreground/50 truncate">
                  {user.email}
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-sidebar-foreground/40 group-hover:text-sidebar-foreground/70 flex-shrink-0" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="right" className="w-52">
            <div className="px-3 py-2 border-b">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
            <DropdownMenuItem asChild>
              <Link href="/settings">
                <Settings className="w-4 h-4 mr-2" /> {t("common.profile")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="w-4 h-4 mr-2" /> {t("nav.fieldReports")}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:text-destructive"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              <LogOut className="w-4 h-4 mr-2" /> {t("common.logout")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const Icon = item.icon;
  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[12.5px] font-medium transition-colors",
        isActive
          ? "bg-sidebar-primary text-white"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
      )}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="flex-1">{item.label}</span>
      {item.badge !== undefined && item.badge > 0 && (
        <span className="text-[10px] bg-red-500 text-white rounded-full px-1.5 py-0.5 leading-none min-w-[18px] text-center">
          {item.badge}
        </span>
      )}
    </Link>
  );
}
