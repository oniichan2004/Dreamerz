import Image from "next/image";
// import DreamIntro from "../animations/dream-animation";
import "../styles/text-gradient.css";
import "../styles/buttons.css";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
export default function Hero() {
  return (
    <div className="  relative min-h-[130svh] w-full md:min-h-svh   ">
      <Image
        src="/header-background.png"
        alt="Logo"
        fill
        priority
        className="object-cover
        "
      />

      <div className="relative flex flex-col items-center justify-center pt-36 sm:pt-28 md:pt-32 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-16 lg:pt-32">
        <div className="dz-wrap lg:order-2 lg:shrink-0">
          {/* <DreamIntro /> */}
        </div>

        <div className="flex flex-col items-center px-7 sm:px-10 md:px-14 text-center gap-4 lg:order-1 lg:items-start lg:self-start lg:px-0 lg:pt-40 lg:text-left lg:max-w-2xl lg:min-w-0 lg:flex-1 lg:gap-6 2xl:max-w-3xl">
          <span className="" id="grad-title">
            The Social Network For Dreams
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl font-[Poppins] font-bold lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Welcome to Dreamerz — The Place Where Dreams Come True
          </span>
          <span className="text-sm sm:text-base md:text-lg text-white/70 lg:text-xl xl:text-2xl 2xl:text-3xl">
            Realize your dreams by supporting others. Donate $1 to dreams you
            love and gain 10x visibility for yours, worldwide. Attract more
            donors and achieve your dreams faster — together!
          </span>

          <button
            className= { cn(buttonVariants({variant:"gradient"}) ,"w-48 h-11 sm:w-52 sm:h-12 md:w-60 lg:w-64 lg:h-14 xl:w-72 xl:h-16 2xl:w-80 2xl:h-20 hover:shadow-[0_14px_30px_-12px_rgba(195,168,245,1)]")}
           
          >
            <span className="font-sans whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl">
           Start My Journey
          </span>
          </button>
        </div>
      </div>
    </div>
  );
}
