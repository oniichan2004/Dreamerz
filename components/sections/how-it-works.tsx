import { Text } from "../ui/text";

import { Button } from "../ui/button";
import "../styles/buttons.css";
const STEPS = [
  "Create and share your dream",
  "Start donating with only $1 to other dreamers to get exposure and inspire support",
  "Gain visibility in a global community with each donation you make",
  "Attract donors to your own dream through your increased exposure and achieve your dreams faster and for less personal cost",
  "Withdraw funds and turn your dream into reality!",
];
export default function HowItWorks() {
  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-col p-3 pb-10 xl:flex-row xl:gap-10 xl:py-20 2xl:px-30 xl:justify-center">
      <div className="xl:px-20 ">
        <Text
          font="grotesk"
          as="span"
          className="text-3xl font-bold pb-7  md:text-5xl"
        >
          How Dreamerz works:
        </Text>
        <ol className="pb-7 pt-10 ">
          {STEPS.map((items, i) => (
            <li key={i} className=" relative flex gap-5 pb-8">
              {i < STEPS.length - 1 && (
                <span className=" bg-linear-to-b from-[#84fad5] via-[#e9c6ff] to-[#f8ed84] absolute top-9 left-[17px] h-full w-px  bg-amber-200"></span>
              )}

              <span className=" bg-linear-to-b from-[#84fad5] via-[#e9c6ff] to-[#f8ed84] flex size-9 shrink-0 font-bold items-center justify-center rounded-full border border-amber-200 text-sm">
                {i + 1}
              </span>
              <Text
                font="grotesk"
                as="span"
                className="pt-1 text-lg  md:text-xl"
              >
                {items}
              </Text>
            </li>
          ))}
        </ol>

        <Button
          variant="gradient"
          className=" flex  items-center justify-center ml-3  mr-20  max-w-150 py-5 "
        >
          <Text font="grotesk" as="span" className="text-lg font-bold  ">
            Get my dream fullfiled
          </Text>
        </Button>
      </div>
      <div className="flex flex-col gap-4 py-10 btn-login px-4 mt-5 mx-3 rounded-2xl h-fit  bg-linear-to-r from-[#ddfef4] via-[#faf4ff] to-[#fefce8] xl:max-w-xl xl:px-20">
        <Text
          as="span"
          font="grotesk"
          className="font-semibold text-lg md:text-2xl"
        >
          How you will receive your dream fulfilled:
        </Text>

        <Text as="span" font="grotesk" className="md:text-lg">
          Everyone has to donate in order to fulfill their dreams. For every $1
          you donate, it creates a 10x higher visibility worldwide, which helps
          you attract more donors to your dream, allowing you to achieve your
          goal while only contributing half the total cost yourself. The more
          you give, the more likely you are to receive!
        </Text>
      </div>
    </div>
  );
}
