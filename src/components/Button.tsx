import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand-gradient text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_8px_30px_-8px_rgba(90,100,255,.7)] hover:brightness-110 hover:shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_12px_36px_-8px_rgba(90,100,255,.9)]",
  ghost: "border border-white/20 bg-white/[0.02] hover:bg-white/10",
};

const sizes = {
  sm: "h-11 px-6 text-[15px]",
  lg: "h-[60px] px-[37px] text-[17px]",
};

type ButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

export function Button({ href, variant = "primary", size = "sm", className, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition duration-200 hover:-translate-y-px",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
