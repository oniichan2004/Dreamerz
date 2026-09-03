import { Text } from "../ui/text";
import Marquee from "../animations/marquee";
import Link from "next/link";

export default function OurCommunity() {
  return (
    <div className="flex flex-col lg:h-150 pb-20 lg:pb-0 bg-linear-to-br from-[#C8FFF2] via-[#F5E4FF] to-[#FFF08A]">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 lg:h-full lg:flex-row lg:justify-between lg:gap-9">
      <div className="max-w-150 items-start  gap-6 flex  px-6 sm:px-8 md:px-10 py-10   lg:pl-32 lg:pr-0  flex-col ">
        <Text
          as="span"
          font="caveat"
          className="font-bold text-4xl lg:text-5xl"
        >
          Join Our Dream Community!
        </Text>
        <Text as="span" font="grotesk">
          Small ripples create mighty waves. Your $1 today could change the
          world tomorrow - including your own! Every small donation you make
          brings you halfway closer to your own dreams realization.
        </Text>
        <Link
          href="/"
          className="p-4 bg-black max-w-40  text-white rounded-md cursor-pointer hover:text-blue-600"
        >
          <Text as="span" font="grotesk">
            Join Today
          </Text>
        </Link>
      </div>
      <div className="flex   lg:hidden">
        <Marquee
          direction="left"
          itemClassName="  md:text-sm bg-linear-to-r from-[#6DD5B8] via-[#C4A3F5] to-[#FFD43B]  max-h-7 flex items-center xl: "
        />
      </div>
      <div className="hidden lg:block pr-30">
        <Marquee
          direction="up"
          itemClassName=" px-3 py-2 md:px-4 md:py-2 text-sm md:text-base   bg-linear-to-r from-[#A8F0D8] via-[#DCC5F5] to-[#FFDCA8]"
        />
      </div>
      </div>
    </div>
  );
}
