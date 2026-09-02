import { Text } from "../ui/text";

import Image from "next/image";
export default function WingsDonations() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1800px] flex-col items-center pb-20 lg:flex-row lg:justify-center lg:pl-20">
      <div className="w-full max-w-150 aspect-square relative">
        <Image
          src="/babusi.png"
          alt="foto babusi"
          fill
          sizes=""
          className=" object-contain"
        />
      </div>
      <div className="flex flex-col items-center  -mt-20 px-20  gap-5 max-w-200">
        <Text className=" font-bold  text-4xl   text-black/80 " font="grotesk">
          Wings Donations
        </Text>

        <Text font="grotesk" className="text-gray-500  md:text-xl">
          Wing Donations are a pure charity section where we unite as a
          community to raise money for emergencies and special cases. United,
          your donations make a big difference quickly.
        </Text>
      </div>
    </div>
  );
}
