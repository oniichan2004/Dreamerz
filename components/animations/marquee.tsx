import "../styles/marque.css";
import { Text } from "../ui/text";
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
}: {
  direction: "left" | "right";
}) {
  return <div className="overflow-hidden w-full " >

<div className={`marquee marquee--${direction}`}>
{[...ITEMS,...ITEMS].map((item,i) => (
    <Text className="rounded-xl bg-white px-9 py-8 font-semibold  text-2xl whitespace-nowrap"
    key={i}>

        {item}
    </Text>
))}

</div>

  </div>;
}
