import { Button } from "../ui/button";
import { Text } from "../ui/text";
import UserCard from "../ui/user-card";
import { dreams } from "@/data/dreams-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function FulfillTheirDreams() {
  return (
    <div className="flex flex-col items-center gap-10 bg-gray-100 py-20  text-center">
      <div>
        <Text
          as="span"
          font="grotesk"
          className="text-2xl  text-gray-700 sm:text-2xl md:text-3xl lg:text-3xl"
        >
          Latest Dreams on Dreamerz
        </Text>
      </div>
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[100rem] px-2">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full px-0 sm:px-8 lg:px-24"
        >
          <CarouselContent className="items-stretch">
            {dreams.map((dream) => (
              <CarouselItem
                key={dream.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/4 "
              >
                <div className="h-full">
                  <UserCard dream={dream} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>

      <div className="">
        <Button variant="gradient" className="py-4 px-7  md:py-6 md:px-10">
          <Text
            as="span"
            font="grotesk"
            className="text-lg font-bold md:text-xl lg:text-2xl"
          >
            Fulfill Their Dreams
          </Text>
        </Button>
      </div>
    </div>
  );
}
