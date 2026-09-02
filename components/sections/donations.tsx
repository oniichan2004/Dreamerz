import Image from "next/image";
import { ShieldCheck, Check } from "lucide-react";

import { Text } from "@/components/ui/text";
import { Button } from "../ui/button";
export default function Donations() {
  return (
    <div className="relative w-full bg-[#010e2d] overflow-hidden">
      <div className="absolute inset-0 mx-auto max-w-[2400px]">
        <Image
          alt="donations-background"
          src="/donations-background.png"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col p-10 pb-20 xl:flex-row xl:gap-20 xl:px-20 xl:pt-20">
      <div className="relative  h-[420px] w-[320px] sm:h-[520px] sm:w-[420px]  shrink-0 xl:order-2">
        <Image
          alt="donations-text"
          src="/donation.webp"
          fill
          className="object-contain  "
        />
      </div>
      <div className="flex flex-col z-10 relative  gap-6  xl:order-1  max-w-200 ">
        <div className="  relative z-10 bg-linear-to-br  from-[#C8FFF2] via-[#F5E4FF] to-[#FFF08A]  rounded-full flex items-center justify-center  w-20 h-20  ">
          <ShieldCheck className="" size="50" />
        </div>
        <div>
          <Text
            as="span"
            font="grotesk"
            className="text-3xl font-bold text-white "
          >
            Secured Donations
          </Text>
        </div>
        <div>
          <Text as="span" font="grotesk" className="text-xl  text-white ">
            The platform provides a strict trackkeeping of your balance. Every
            made and received donation will be confidently saved in separate
            sections of your personal account
          </Text>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="  bg-linear-to-br  from-[#22ba97] via-[#c174ed] to-[#FFF08A] rounded-sm  flex items-center justify-center">
              <Check />
            </div>
            <Text
              as="span"
              font="grotesk"
              className="text-xl font-bold text-white "
            >
              You choose who do you want to support
            </Text>
          </div>

          <div className="flex flex-row items-center justify-center gap-4">
            <div className=" bg-linear-to-br  from-[#22ba97] via-[#c174ed] to-[#FFF08A] rounded-sm flex items-center justify-center">
              <Check />
            </div>
            <Text
              as="span"
              font="grotesk"
              className="text-xl font-bold text-white "
            >
              One dream at a time
            </Text>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 pb-10">
            <div className=" bg-linear-to-br  from-[#22ba97] via-[#c174ed] to-[#FFF08A] rounded-sm  flex items-center justify-center">
              <Check />
            </div>
            <Text
              as="span"
              font="grotesk"
              className="text-xl font-bold text-white "
            >
              Transparent Fulfilled and Received Donations history
            </Text>
          </div>
          <Button variant="gradient" className=" px-5 py-7 ">
            <Text as="span" font="grotesk" className="font-bold">
              {" "}
              Start receiving donations
            </Text>
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
