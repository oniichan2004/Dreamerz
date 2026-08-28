import Hero from "../components/core/hero-section";
import Choose from "@/components/sections/ choosing";
import Inspiration from "@/components/sections/inspiration";
import HowItWorks from "@/components/sections/how-it-works";
export default function Home() {
  return (
    <div>
      <Hero />
      <Choose/>
      <Inspiration/>
<HowItWorks/>
    </div>
  );
}
