import Hero from "../components/core/hero-section";
import Choose from "@/components/sections/ choosing";
import Inspiration from "@/components/sections/inspiration";
export default function Home() {
  return (
    <div>
      <Hero />
      <Choose/>
      <Inspiration/>
    </div>
  );
}
