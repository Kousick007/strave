import { cn } from "@/lib/cn";
import { Battery, Chat, Heart, Signal, Wifi } from "../icons";

export function StatusBar({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between text-u-13 font-semibold", dark ? "text-[#111]" : "text-white", className)}>
      <span>9:41</span>
      <span className="flex items-center gap-4">
        <Signal className="h-9 w-15" />
        <Wifi className="h-9 w-13" />
        <Battery className="h-10 w-21" />
      </span>
    </div>
  );
}

export function CommentBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      <div className="flex h-36 flex-1 items-center gap-8 rounded-full border border-white/35 bg-white/10 px-6 backdrop-blur-md">
        <span className="grid size-24 place-items-center rounded-full bg-white/20">
          <Chat className="size-11" />
        </span>
        <span className="text-u-10 text-white/75">Add a comment</span>
      </div>
      <span className="grid size-36 place-items-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md">
        <Heart className="h-13 w-15" />
      </span>
    </div>
  );
}

export function CircleButton({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-26 place-items-center rounded-full border border-white/55 bg-white/10 [&>svg]:size-12">
      {children}
    </span>
  );
}
