import {
  Card,
  CardHeader,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="  w-full h-screen flex items-start  pt-30 justify-center bg-linear-135 from-[#E8F5F3] via-[#FAF8F1] to-[#FDF6D8] ">
      <div className="flex flex-col   items-center  px-20 gap-10 pb-10 pt-5 bg-white h-auto w-full max-w-170   ">
        <div className="flex flex-col gap-2 items-center justify-center  ">
          <Image
            width={170}
            height={170}
            src="/shooting-star.png"
            alt="logo"
            className="invert"
          />
          <Text as="span" font="caveat" className="text-5xl font-bold">
            Create Account
          </Text>
          <Text as="span" font="grotesk" className="text-sm text-gray-500">
            Become a dreamer now and start fulfilling your dream!
          </Text>
        </div>
        <div className=" w-full  flex flex-col items-center justify-center gap-5 ">
          <div className=" flex flex-col gap-1  w-full max-w-100">
            <Text as="span" font="grotesk" className="text-sm">
              E-mail address:
            </Text>
            <Input className="w-full rounded-md border border-gray-300 h-9   " />
          </div>{" "}
          <div className=" flex flex-col items-start gap-1  w-full max-w-100">
            <Text as="span" font="grotesk" className="text-sm">
              Password:
            </Text>
            <Input
              className="w-full rounded-md border border-gray-300 h-9  "
              type="password"
            />
          </div>{" "}
          <div className=" flex flex-col items-start gap-1  w-full max-w-100">
            <Text as="span" font="grotesk" className="text-sm">
              Repeat Password:
            </Text>
            <Input
              className="w-full rounded-md border border-gray-300 h-9 "
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
