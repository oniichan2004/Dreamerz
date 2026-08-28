import Image from "next/image";
import Link from "next/link";
import { Text } from "../ui/text";

export default function Footer() {
  return (
    <div className="flex flex-col gap-7 bg-black text-white/70 pl-8 pb-10   ">
      <div className="flex flex-col gap-7   md:pl-10 xl:flex-row xl:pt-10  ">
        <div className="flex flex-col gap-7 xl:flex-row ">
        <Image src="/shooting-star.png" width={200} height={40} alt="Logo" />
        <Link href="/">
          <Text font="grotesk" className="hover:text-blue-600 md:text-xl ">
            {" "}
            How it works
          </Text>
        </Link>
        <Link href="/">
          <Text font="grotesk" className="hover:text-blue-600 md:text-xl ">
            {" "}
            About us
          </Text>
        </Link>
        <Link href="/">
          <Text font="grotesk" className="hover:text-blue-600 md:text-xl ">
            {" "}
            Terms
          </Text>
        </Link>
        <Link href="/">
          <Text font="grotesk" className="hover:text-blue-600 md:text-xl ">
            {" "}
            Privacy
          </Text>
        </Link>
        <Link href="/">
          <Text font="grotesk" className="hover:text-blue-600 md:text-xl ">
            {" "}
            FAQ
          </Text>
        </Link>
</div>
<div>
        <Text className="md:text-xl">Follow Us:</Text>
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
      <div>
        <Text className="text-md md:text-xl  md:pl-10">
          © Dreamerz 2026, All rights reserved
        </Text>
      </div>
    </div>
  );
}
