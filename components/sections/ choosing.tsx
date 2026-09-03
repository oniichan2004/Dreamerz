import { Text } from "../ui/text";
export default function Choose() {
  return (
    <div className="flex flex-col  items-center justify-center  px-6 py-30">
      <Text
        as="span"
        variant="default"
        font="grotesk"
        className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Why Choose Dreamerz
      </Text>
      <div className=" mt-10 mx-auto w-full max-w-[1500px]  ">
        <iframe
          src="https://www.youtube-nocookie.com/embed/b1FmT-p5BKI?rel=0"
          className="aspect-video w-full "
          title=" Dreamers introduction"
          allow="accelerometer ; encrypted-media ; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
