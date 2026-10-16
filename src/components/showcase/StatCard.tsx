import { cn } from "@/lib/cn";

const tones = {
  blue: "bg-[linear-gradient(180deg,#b9d3ff_0%,#78a6ff_45%,#2f6cff_100%)]",
  orange: "bg-[linear-gradient(180deg,#ffc1aa_0%,#fb9572_45%,#f0603a_100%)]",
};

type StatCardProps = { value: string; label: string; tone: keyof typeof tones };

export function StatCard({ value, label, tone }: StatCardProps) {
  return (
    <div className={cn("flex h-300 flex-col justify-between rounded-u-18 px-24 py-22 font-display", tones[tone])}>
      <p className="text-u-64 font-bold leading-none tracking-[-1.5px] [text-shadow:0_2px_20px_rgba(255,255,255,.25)]">{value}</p>
      <p className="whitespace-pre-line text-u-25 font-semibold leading-[1.15] tracking-[-0.3px]">{label}</p>
    </div>
  );
}
