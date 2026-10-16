import Image from "next/image";
import { post } from "@/content/site";
import { cn } from "@/lib/cn";
import { CommentBar } from "./parts";

const tones = {
  rainbow: {
    image: "saturate-160 contrast-105",
    overlay:
      "mix-blend-overlay bg-[linear-gradient(135deg,rgba(255,60,140,.55),rgba(255,170,40,.35)_45%,rgba(0,200,255,.45))]",
  },
  rose: {
    image: "saturate-130",
    overlay: "mix-blend-soft-light bg-[linear-gradient(160deg,rgba(255,120,150,.55),rgba(200,60,90,.5))]",
  },
};

type PostCardProps = { image: string; avatar: string; tone: keyof typeof tones };

export function PostCard({ image, avatar, tone }: PostCardProps) {
  const t = tones[tone];
  return (
    <article className="relative h-300 overflow-hidden rounded-u-18">
      <Image src={image} alt="" fill sizes="280px" className={cn("object-cover", t.image)} />
      <div className={cn("absolute inset-0", t.overlay)} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.35)_0%,transparent_40%,transparent_70%,rgba(0,0,0,.3)_100%)]" />
      <div className="absolute left-14 top-12 z-10 flex items-center gap-8">
        <Image src={avatar} alt="" width={26} height={26} className="size-26 rounded-full border-[1.5px] border-white/70 object-cover" />
        <div>
          <p className="text-u-12 font-medium text-white/85">{post.handle}</p>
          <p className="mt-1 text-u-10 text-white/55">{post.sub}</p>
        </div>
      </div>
      <p className="absolute inset-x-14 top-56 z-10 font-display text-u-19 font-medium leading-[1.25] tracking-[-0.2px] [text-shadow:0_1px_8px_rgba(0,0,0,.25)]">
        {post.caption}
      </p>
      <CommentBar className="absolute inset-x-12 bottom-12 z-10" />
    </article>
  );
}
