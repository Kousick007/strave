import Image from "next/image";
import { stories } from "@/content/site";
import { cn } from "@/lib/cn";
import { Bell, ChevronDown, Plus, Search } from "../icons";
import { CircleButton, CommentBar, StatusBar } from "./parts";

export function StoriesPhone() {
  return (
    <div className="relative h-440 overflow-hidden rounded-u-18 ring-1 ring-white/12">
      <Image src="/images/phone.jpg" alt="" fill sizes="280px" priority className="object-cover saturate-140 contrast-105" />
      <div className="absolute inset-0 mix-blend-overlay bg-[linear-gradient(200deg,rgba(0,220,220,.55)_0%,rgba(255,140,60,.35)_45%,rgba(0,170,170,.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.25)_0%,transparent_22%,transparent_60%,rgba(0,40,40,.45)_100%)]" />

      <StatusBar className="relative z-10 pl-14 pr-10 pt-6" />
      <div className="relative z-10 flex items-center justify-between px-14 pt-20">
        <CircleButton>
          <Search />
        </CircleButton>
        <span className="ml-34 flex items-center gap-6 text-u-12 font-medium">
          Stories <ChevronDown className="size-8" />
        </span>
        <span className="flex gap-8">
          <CircleButton>
            <Plus />
          </CircleButton>
          <CircleButton>
            <Bell />
          </CircleButton>
        </span>
      </div>
      <div className="relative z-10 mx-6 mt-14 h-2 rounded-full bg-white/30">
        <span className="block h-full w-[22%] rounded-full bg-white" />
      </div>

      <div className="absolute inset-x-8 bottom-68 z-10 flex items-center justify-between">
        {stories.map((s) => (
          <div key={s.handle} className="flex flex-col items-center gap-4">
            <Image
              src={s.avatar}
              alt=""
              width={58}
              height={58}
              className={cn(
                "rounded-full object-cover",
                s.featured ? "size-58 border-2 border-white shadow-[0_0_0_3px_rgba(255,255,255,.25)]" : "size-36 border-[1.5px] border-white/75",
              )}
            />
            <span className={s.featured ? "mt-2 text-u-9 text-white" : "text-u-7 text-white/75"}>{s.handle}</span>
          </div>
        ))}
      </div>

      <CommentBar className="absolute inset-x-12 bottom-22 z-10" />
      <span className="absolute bottom-7 left-1/2 z-10 h-4 w-100 -translate-x-1/2 rounded-full bg-white" />
    </div>
  );
}
