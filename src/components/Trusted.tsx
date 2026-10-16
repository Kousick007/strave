import Image from "next/image";
import { trusted } from "@/content/site";
import { cn } from "@/lib/cn";
import { SegmentMark } from "./icons";

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex items-center gap-[86px] pr-[86px]">
      {trusted.logos.map((logo) => (
        <li
          key={logo.name}
          className={cn(
            "flex items-center gap-2 whitespace-nowrap font-display text-[19px] font-bold tracking-[-0.3px] text-white opacity-50 md:text-[23px]",
            logo.className,
          )}
        >
          {logo.icon === "segment" ? (
            <>
              <SegmentMark className="size-[22px]" />
              <span className="flex flex-col font-semibold leading-[0.9]">
                <small className="text-right text-[7px] tracking-[1px]">TWILIO</small>
                {logo.name}
              </span>
            </>
          ) : (
            <>
              <Image src={logo.icon} alt="" width={22} height={22} unoptimized className="h-[22px] w-auto" />
              {logo.name}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Trusted() {
  return (
    <section className="relative z-10 mt-[70px] text-center md:mt-[118px]">
      <p className="px-5 text-[17px] text-[#7d7e9c]">
        Trusted by <b className="font-semibold text-white">{trusted.count}</b> {trusted.text}
      </p>
      <div className="mask-fade-x mt-9 overflow-hidden md:mt-[58px]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}
