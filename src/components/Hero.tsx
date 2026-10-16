import Image from "next/image";
import { hero } from "@/content/site";
import { Button } from "./Button";
import { Capterra, CreditCard, GoogleG, GooglePlay, Star } from "./icons";

function ReviewBadge() {
  const ring = "-ml-[7px] grid size-7 place-items-center rounded-full border-2 border-[#23235a] first:ml-0";
  return (
    <div className="inline-flex h-[42px] items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.08] pl-1.5 pr-4 backdrop-blur-sm max-sm:scale-90">
      <div className="flex">
        <span className={`${ring} bg-white`}>
          <GoogleG className="size-[15px]" />
        </span>
        <span className={`${ring} bg-white`}>
          <Capterra className="size-[15px]" />
        </span>
        <span className={`${ring} bg-[linear-gradient(180deg,#1ac8fc,#1a72f0)]`}>
          <Image src="/logos/appstore.svg" alt="" width={13} height={13} unoptimized />
        </span>
        <span className={`${ring} bg-white`}>
          <GooglePlay className="size-3.5" />
        </span>
      </div>
      <div className="flex gap-0.5 text-[#ffb21a]" aria-label="Rated 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-4" />
        ))}
      </div>
      <span className="text-sm font-medium text-[#e7e8ff]">{hero.reviews}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center px-5 pt-11 text-center">
      <ReviewBadge />
      <h1 className="mt-[22px] font-display text-[40px] font-bold leading-[1.16] tracking-[-1px] sm:text-[60px] lg:text-[78px] lg:tracking-[-1.2px]">
        Your Community<span className="-mx-[0.04em]">’</span>s Future<span className="-ml-[0.07em]">,</span>
        <br />
        All in One Platform<span className="-ml-[0.07em]">.</span>
      </h1>
      <p className="mt-[30px] max-w-[900px] text-base leading-[1.6] text-muted sm:text-[19px]">
        {hero.subtitle[0]}
        <br className="hidden lg:inline" /> {hero.subtitle[1]}
      </p>
      <Button href="#" size="lg" className="mt-[52px]">
        {hero.cta}
      </Button>
      <p className="mt-[22px] flex items-center gap-3 text-[15px] text-[#8f93bd]">
        <CreditCard className="size-4" />
        {hero.note}
      </p>
    </section>
  );
}
