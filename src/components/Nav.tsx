import Link from "next/link";
import { navLinks, site } from "@/content/site";
import { Button } from "./Button";
import { ChevronDown, Logo } from "./icons";

export function Nav() {
  return (
    <header className="relative z-10 mx-auto flex max-w-[1260px] items-center px-5 py-5 md:px-10 md:py-7">
      <Link href="/" className="flex items-center gap-2.5 font-display text-[25px] font-extrabold tracking-[-0.5px]">
        <Logo className="size-7" />
        <span>{site.name}</span>
      </Link>
      <nav className="ml-11 hidden gap-[34px] text-[15px] font-medium text-[#e8e9ff] lg:flex">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="flex items-center gap-1.5 transition-opacity hover:opacity-80">
            {link.label}
            {link.dropdown && <ChevronDown className="size-2.5" />}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-3.5">
        <Button href="#" variant="ghost" className="max-sm:hidden">
          Log in
        </Button>
        <Button href="#">Start Your Free Trial</Button>
      </div>
    </header>
  );
}
