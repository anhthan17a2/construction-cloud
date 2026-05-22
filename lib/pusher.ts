import Pusher from "pusher";
import PusherJS from "pusher-js";

const isMockPusher = !process.env.PUSHER_APP_ID || process.env.PUSHER_APP_ID === "mock";

// Server-side Pusher — no-op stub when credentials are mock
export const pusherServer = isMockPusher
  ? ({ trigger: async () => {} } as unknown as Pusher)
  : new Pusher({
      appId: process.env.PUSHER_APP_ID!,
      key: process.env.PUSHER_KEY!,
      secret: process.env.PUSHER_SECRET!,
      cluster: process.env.PUSHER_CLUSTER!,
      useTLS: true,
    });

// Client-side Pusher singleton
let pusherClient: PusherJS | null = null;

export function getPusherClient(): PusherJS | null {
  if (isMockPusher) return null;
  if (!pusherClient) {
    pusherClient = new PusherJS(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
    });
  }
  return pusherClient;
}

export const PUSHER_EVENTS = {
  ISSUE_CREATED: "issue:created",
  ISSUE_UPDATED: "issue:updated",
  COMMENT_ADDED: "comment:added",
  DRAWING_UPLOADED: "drawing:uploaded",
  USER_JOINED: "user:joined",
  ANNOTATION_ADDED: "annotation:added",
} as const;
