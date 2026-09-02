import { Text } from "../ui/text";

import Marquee from "../animations/marquee";
export default function Inspiration() {
  return (
    <div className=" flex flex-col w-full overflow-hidden gap-3 items-center justify-center bg-gray-100 pt-20  pb-20 ">
      <Text
        as="span"
        font="grotesk"
        className="font-semibold  text-black/80  text-2xl  sm:text-3xl md:text-5xl xl:text-5xl"
      >
        Help Others — Help Yourself
      </Text>
      <Text
        as="span"
        font="grotesk"
        className="text-gray-500  text-xl text-center md:text-2xl  "
      >
        Inspire others by making the first step towards your dreams.{" "}
      </Text>
      <Text
        as="span"
        font="grotesk"
        className="text-gray-500 text-xl text-center md:text-2xl  pb-10"
      >
        Help others and see the whole world move forward, one dream at a time.
      </Text>
      <Marquee direction="left" />
      <Marquee direction="right" />
    </div>
  );
}
