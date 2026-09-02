import Image from "next/image";
import DreamIntro from "../animations/dream-animation";
import "../styles/buttons.css";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Text } from "../ui/text";
export default function Hero() {
  return (
    <div className="  relative pt-20 pb-20  w-full    ">
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
          <DreamIntro />
        </div>

        <div className="flex flex-col items-center px-7 sm:px-10 md:px-14 text-center gap-4 lg:order-1 lg:items-start lg:self-start lg:px-0 lg:pt-40 lg:text-left lg:max-w-2xl lg:min-w-0 lg:flex-1 lg:gap-6 2xl:max-w-3xl">
          <Text
            as="span"
            variant="gradient"
            font="caveat"
            className=" text-4xl md:text-5xl  "
          >
            The Social Network For Dreams
          </Text>

          <Text
            className="text-xl  text-white sm:text-3xl md:text-4xl font-bold lg:text-5xl xl:text-6xl"
            font="grotesk"
            as="span"
          >
            Welcome to Dreamerz . The Place Where Dreams Come True
          </Text>

          <Text
            as="span"
            font="grotesk"
            className="text-sm sm:text-base md:text-lg text-white/70 lg:text-xl xl:text-2xl 2xl:text-3xl"
          >
            Realize your dreams by supporting others. Donate $1 to dreams you
            love and gain 10x visibility for yours, worldwide. Attract more
            donors and achieve your dreams faster — together!
          </Text>

          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "gradient" }),
              "w-48 h-11 sm:w-52 sm:h-12 md:w-60 lg:w-64 lg:h-14 xl:w-72 xl:h-16 2xl:w-80 2xl:h-20 hover:shadow-[0_14px_30px_-12px_rgba(195,168,245,1)]",
            )}
          >
            <span className="font-sans whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl">
              Start My Journey
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
