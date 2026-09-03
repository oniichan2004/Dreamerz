import "../styles/marque.css";
import { Text } from "../ui/text";
import { cn } from "@/lib/utils";

const ITEMS = [
  "Self-Promotion Through Charity",
  "Direct Dream Backing",
  "Global 10x Impact",
  "Mutual Supportive Community",
  "Fulfilled Dreams Collection",
  "Charity with Recognition",
  "Support Dreams Worldwide",
  "Community Powered Giving",
  "Dreams Worth Supporting",
  "Give and Grow Together",
  "Helping Dreams Become Reality",
  "Positive Impact Network",
  "Support with Visibility",
  "Dreamers Helping Dreamers",
  "Shared Success Community",
  "Turn Support Into Impact",
  "Make Someone's Dream Possible",
  "Global Dream Community",
  "Support Inspire Achieve",
  "Give Hope Gain Recognition",
];
export default function Marquee({
  direction,
  itemClassName,
}: {
  direction: "left" | "right" | "up";
  itemClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        direction === "up" ? "h-full max-h-full" : "w-full",
      )}
    >
      <div className={`marquee marquee--${direction}`}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <Text
            key={i}
            className={cn(
              "   rounded-xl text-sm px-4 py-3 bg-white md:px-4 md:py-4 font-semibold  md:text-lg whitespace-nowrap",
              itemClassName,
            )}
          >
            {item}
          </Text>
        ))}
      </div>
    </div>
  );
}
