import { Text } from "../ui/text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { questions } from "@/data/accordion";
export default function Questions() {
  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-5 py-10 px-5 lg:flex-row lg:items-center xl:p-20">
      <div className="flex flex-col gap-4 max-w-150  lg:pl-20 ">
        <Text
          as="span"
          font="grotesk"
          className="font-bold text-2xl md:text-4xl lg:text-5xl"
        >
          Frequently Asked Questions
        </Text>
        <Text
          as="span"
          font="grotesk"
          className=" text-lg md:text-xl lg:text-2xl"
        >
          Find answears to common questions about our social network platform
          and comunity.
        </Text>
      </div>
      <div className="w-full lg:min-w-0 lg:flex-1 ">
        <Accordion className="flex w-full gap-3 md:gap-6" multiple>
          {questions.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-sm    border border-black/10 bg-linear-to-b from-black/1 to-black/4 p-2  md:p-4 hover:bg-linear-to-b hover:from-black/3 hover:to-black/7"
            >
              <AccordionTrigger className="hover:no-underline">
                <Text className=" " font="grotesk">
                  {item.question}
                </Text>
              </AccordionTrigger>
              <AccordionContent>
                <Text className=" text-gray-600" font="grotesk">
                  {item.answer}
                </Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
