import Image from "next/image";
import Link from "next/link";
import { Text } from "../ui/text";

export default function Footer() {
  return (
    <div className="flex flex-col gap-7 bg-black text-white/70 pl-8 pb-10 xl:px-10   ">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-7 md:pl-10 xl:flex-row xl:grid xl:grid-cols-3 xl:pt-10">
        <div className="pt-10">
          <Image
            src="/shooting-star.png"
            width={200}
            height={40}
            alt="Logo"
            className="md:w-40 xl:w-55 xl:h-auto "
          />
        </div>
        <div className="flex flex-col gap-7 xl:flex-row xl:pt-20 xl:gap-7 xl:justify-self-center">
          <Link href="/">
            <Text font="grotesk" className="hover:text-blue-600 md:text-sm  ">
              {" "}
              How it works
            </Text>
          </Link>
          <Link href="/">
            <Text font="grotesk" className="hover:text-blue-600 md:text-sm ">
              {" "}
              About us
            </Text>
          </Link>
          <Link href="/">
            <Text font="grotesk" className="hover:text-blue-600 md:text-sm ">
              {" "}
              Terms
            </Text>
          </Link>
          <Link href="/">
            <Text font="grotesk" className="hover:text-blue-600 md:text-sm ">
              {" "}
              Privacy
            </Text>
          </Link>
          <Link href="/">
            <Text font="grotesk" className="hover:text-blue-600 md:text-sm ">
              {" "}
              FAQ
            </Text>
          </Link>
        </div>
        <div className="flex flex-col xl:justify-self-end xl:pt-20 pr-20 ">
          <Text className="md:text-sm">Follow Us:</Text>
          <div className="flex flex-row gap-5  ">
            <Link href="/">
              <Image
                src="/youtube.png"
                width={30}
                height={30}
                alt="youtube-logo"
                className="invert md:w-10 h-auto"
              />
            </Link>
            <Link href="/">
              <Image
                src="/facebook.png"
                width={30}
                height={30}
                alt="facebook-logo"
                className="invert md:w-10 h-auto"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.png"
                width={30}
                height={30}
                alt="instagram-logo"
                className="invert md:w-10 h-auto"
              />
            </Link>
            <Link href="/">
              <Image
                src="/twitter.png"
                width={30}
                height={30}
                alt="twitter-logo"
                className="invert md:w-10 h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="xl:flex xl:justify-center">
        <Text className="text-md  text-white/30 md:text-xl  md:pl-10 xl:text-xl">
          © Dreamerz 2026, All rights reserved
        </Text>
      </div>
    </div>
  );
}
