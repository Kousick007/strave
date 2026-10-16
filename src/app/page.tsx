import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Showcase } from "@/components/showcase/Showcase";
import { Trusted } from "@/components/Trusted";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-[110px]">
      <Background />
      <Nav />
      <main>
        <Hero />
        <Showcase />
        <Trusted />
      </main>
    </div>
  );
}
