import Image from "next/image";
import { Fragment } from "react";
import { notifications } from "@/content/site";

export function NotificationCard() {
  return (
    <div className="relative h-440 overflow-hidden rounded-u-18">
      <Image src="/images/man.jpg" alt="" fill sizes="280px" className="object-cover saturate-130 sepia-35 -hue-rotate-12 contrast-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ff7d7a_0%,#ff9466_55%,#f59a3c_100%)] opacity-85 mix-blend-multiply" />

      <div className="absolute inset-x-8 bottom-22 z-10 rounded-u-12 border border-white/25 bg-[linear-gradient(180deg,rgba(240,140,40,.55),rgba(230,120,30,.62))] px-12 pb-10 pt-12 backdrop-blur-[10px]">
        <p className="mb-8 text-u-10 font-semibold">Now</p>
        {notifications.map((n) => (
          <div key={n.users.join()} className="flex items-center gap-8 py-6">
            <Image src={n.avatar} alt="" width={26} height={26} className="size-26 shrink-0 rounded-full object-cover" />
            <p className="flex-1 text-u-9 leading-[1.35] text-white/85">
              {n.users.map((u, i) => (
                <Fragment key={u}>
                  {i > 0 && " and "}
                  <b className="font-semibold text-white">{u}</b>
                </Fragment>
              ))}{" "}
              {n.action} <span className="text-white/60">{n.time}</span>
            </p>
            {n.thumb ? (
              <Image src={n.thumb} alt="" width={26} height={26} className="size-26 rounded-u-4 object-cover" />
            ) : (
              <button type="button" className="whitespace-nowrap rounded-full border border-white/40 bg-white/20 px-10 py-5 text-u-9 font-medium">
                Follow back
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
