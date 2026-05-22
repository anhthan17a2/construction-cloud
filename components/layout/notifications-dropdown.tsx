"use client";

import { useState, useEffect } from "react";
import { Bell, CheckCheck, AlertCircle, FileText, MessageSquare, Users } from "lucide-react";
import { TimeAgo } from "@/components/ui/time-ago";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: string;
  title: string;
  body: string;
  link: string | null;
  read: boolean;
  createdAt: string;
}

const TYPE_ICON: Record<string, React.ElementType> = {
  ISSUE_ASSIGNED: AlertCircle,
  ISSUE_COMMENT: MessageSquare,
  DRAWING_UPLOADED: FileText,
  RFI_RESPONSE: MessageSquare,
  PUNCH_UPDATED: CheckCheck,
  MENTION: MessageSquare,
  PROJECT_INVITE: Users,
};

const TYPE_COLOR: Record<string, string> = {
  ISSUE_ASSIGNED: "text-red-500 bg-red-500/10",
  ISSUE_COMMENT: "text-blue-500 bg-blue-500/10",
  DRAWING_UPLOADED: "text-sky-500 bg-sky-500/10",
  RFI_RESPONSE: "text-purple-500 bg-purple-500/10",
  PUNCH_UPDATED: "text-green-500 bg-green-500/10",
  MENTION: "text-yellow-500 bg-yellow-500/10",
  PROJECT_INVITE: "text-primary bg-primary/10",
};

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);

  const unread = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    fetch("/api/notifications")
      .then((r) => r.json())
      .then((d) => setNotifications(d.data ?? []));
  }, []);

  const markAllRead = async () => {
    await fetch("/api/notifications", { method: "PATCH" });
    setNotifications((p) => p.map((n) => ({ ...n, read: true })));
  };

  const markRead = async (id: string) => {
    await fetch(`/api/notifications?id=${id}`, { method: "PATCH" });
    setNotifications((p) => p.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 relative">
          <Bell className="w-4 h-4" />
          {unread > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] font-bold text-white flex items-center justify-center leading-none">
              {unread > 9 ? "9+" : unread}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0" sideOffset={8}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-sm font-semibold">Thông báo</span>
          {unread > 0 && (
            <button
              onClick={markAllRead}
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              <CheckCheck className="w-3 h-3" /> Đánh dấu tất cả đã đọc
            </button>
          )}
        </div>

        {/* List */}
        <div className="max-h-80 overflow-y-auto divide-y">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <Bell className="w-8 h-8 text-muted-foreground/30 mb-2" />
              <p className="text-xs text-muted-foreground">Không có thông báo</p>
            </div>
          ) : (
            notifications.map((n) => {
              const Icon = TYPE_ICON[n.type] ?? Bell;
              const color = TYPE_COLOR[n.type] ?? "text-muted-foreground bg-muted";
              return (
                <div
                  key={n.id}
                  onClick={() => { markRead(n.id); if (n.link) window.location.href = n.link; }}
                  className={cn(
                    "flex gap-3 px-4 py-3 cursor-pointer transition-colors hover:bg-muted/50",
                    !n.read && "bg-primary/5"
                  )}
                >
                  <div className={cn("w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", color)}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium leading-tight">{n.title}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{n.body}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      <TimeAgo date={new Date(n.createdAt)} />
                    </p>
                  </div>
                  {!n.read && (
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  )}
                </div>
              );
            })
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
