import Image from "next/image";
import { gridTiles } from "@/content/site";
import { StatusBar } from "./parts";

export function GridPhone() {
  return (
    <div className="relative h-440 overflow-hidden rounded-u-18 bg-[#f6f4f0] px-14 pt-10 ring-1 ring-white/40">
      <StatusBar dark className="px-2" />
      <div className="mb-12 mt-14 h-30 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.08)]" />
      <div className="grid grid-cols-2 gap-8">
        {gridTiles.map((src, i) => (
          <div key={src} className="relative grid h-88 place-items-center overflow-hidden rounded-u-12">
            <Image src={src} alt="" fill sizes="130px" className="object-cover saturate-150" />
            {i === 0 && (
              <>
                <div className="absolute inset-0 bg-[rgba(40,10,10,.62)]" />
                <span className="neon-text relative text-center font-display text-u-13 font-extrabold leading-[1.05] tracking-[0.3px]">
                  GIRLS JUST
                  <br />
                  WANNA
                  <br />
                  HAVE FUN
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
