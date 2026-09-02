import Hero from "../components/core/hero-section";
import Choose from "@/components/sections/ choosing";
import Inspiration from "@/components/sections/inspiration";
import HowItWorks from "@/components/sections/how-it-works";
import FulfillTheirDreams from "@/components/sections/fulfill-their-dreams";
import WingsDonations from "@/components/sections/wings-donations";
import Questions from "@/components/sections/questions";

import OurCommunity from "@/components/sections/our-community";
import Donations from "@/components/sections/donations";
export default function Home() {
  return (
    <div>
      <Hero />
      <Choose />
      <Inspiration />
      <HowItWorks />
      <FulfillTheirDreams />
      <Donations />
      <WingsDonations />
      <OurCommunity />
      <Questions />
    </div>
  );
}
