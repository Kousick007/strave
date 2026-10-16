import { stats } from "@/content/site";
import { cn } from "@/lib/cn";
import { GridPhone } from "./GridPhone";
import { NotificationCard } from "./NotificationCard";
import { PostCard } from "./PostCard";
import { StatCard } from "./StatCard";
import { StoriesPhone } from "./StoriesPhone";

function Column({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex w-280 shrink-0 flex-col gap-24", className)}>{children}</div>;
}

export function Showcase() {
  return (
    <section className="relative z-10 mt-[68px] flex w-full justify-center overflow-hidden">
      <div className="showcase-scale flex items-center justify-center gap-24">
        <Column className="max-[720px]:hidden">
          <GridPhone />
        </Column>
        <Column>
          <PostCard image="/images/a1.jpg" avatar="/images/av3.jpg" tone="rainbow" />
          <StatCard tone="blue" {...stats.millionaires} />
        </Column>
        <Column>
          <StoriesPhone />
        </Column>
        <Column>
          <StatCard tone="orange" {...stats.served} />
          <PostCard image="/images/b1.jpg" avatar="/images/av3.jpg" tone="rose" />
        </Column>
        <Column className="max-[720px]:hidden">
          <NotificationCard />
        </Column>
      </div>
    </section>
  );
}
