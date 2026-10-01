"use client";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import "../styles/buttons.css";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Bell, Search, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Text } from "../ui/text";
import { useAuth } from "@/app/providers/auth-provider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuth();

  const isHomePage = pathname === "/";
  const isLightHeader = scrolled || !isHomePage;
  const isAppRoute = isAuthenticated;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return <header className="h-16 w-full bg-white" />;
  }

  if (isAppRoute) {
    return (
      <header className="w-full bg-white">
        <div className="flex h-16 shadow-md items-center justify-between px-3">
          <div>
            <Link href="/newsfeed">
              <Image
                width={130}
                height={130}
                src="/shooting-star.png"
                alt="logo"
                className="invert"
              />
            </Link>
          </div>
          <div className=" hidden sm:block w-full max-w-70">
            <Input
              placeholder="Search..."
              className="bg-gray-100 border-2 border-gray-300 "
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex items-center justify-center  bg-gray-100 p-3 rounded-full hover:bg-gray-200 cursor-pointer  sm:hidden ">
              <Search size={20} color="gray" />
            </div>
            <div className="flex items-center justify-center bg-gray-100 p-3 rounded-full  hover:bg-gray-200 cursor-pointer">
              <Send size={20} color="gray" />
            </div>
            <div className="flex items-center justify-center bg-gray-100 p-3 rounded-full  hover:bg-gray-200 cursor-pointer">
              <Bell size={20} color="gray" />
            </div>

            <div className="hidden md:block rounded-md bg-[linear-gradient(90deg,#6FE7D8_0%,#C9A7FF_55%,#FFE45C_100%)] p-px">
              <div className="flex h-9 w-20  gap-1 p-2 flex-col items-center justify-center rounded-md bg-white">
                <Text
                  as="span"
                  font="grotesk"
                  className="text-[13px] leading-none text-gray-600"
                >
                  Balance
                </Text>

                <div className="flex items-center justify-center leading-none">
                  <span className="text-[12px]">0</span>

                  <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-yellow-300 bg-clip-text text-[15px] leading-none text-transparent">
                    ✦
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-[linear-gradient(90deg,#6FE7D8_0%,#79C8FF_25%,#C9A7FF_55%,#F2B6DE_70%,#FFE45C_85%,#FFE45C_100%)]" />
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white px-4 py-2"
          : `px-4 py-3 ${isLightHeader ? "bg-white" : "bg-transparent"}`
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1800px] items-center ${
          scrolled
            ? "flex-row justify-between"
            : "flex-col justify-center gap-4 sm:flex-row sm:justify-between"
        }`}
      >
        <div className="text-white">
          <Link href="/">
            <Image
              src="/shooting-star.png"
              alt="Logo"
              width={200}
              height={40}
              className={`brightness-0 w-24 sm:w-32 ${isLightHeader ? "" : "invert"}`}
            />
          </Link>
        </div>
        <div className="flex flex-row gap-2 sm:gap-4 ">
          <Link
            href="/login"
            className={` flex items-center justify-center btn-login   text-white h-[30px] w-[72px] rounded-[8px]  sm:h-[36px]  sm:w-[104px] hover:bg-gradient-to-r hover:from-[#84fad5] hover:via-[#e9c6ff] hover:to-[#f8ed84] hover:text-black  hover:shadow-[0_14px_30px_-12px_rgba(195,168,245,1)]`}
          >
            <span
              className={` ${isLightHeader ? "text-black" : "text-white"}  ${scrolled ? "text-xs text-black sm:text-sm" : "text-xs sm:text-sm"}  whitespace-nowrap`}
            >
              Log in
            </span>
          </Link>

          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: "gradient" }),
              " h-[30px] w-[72px] rounded-[8px]  hover:shadow-[0_14px_30px_-12px_rgba(195,168,245,1)]  sm:h-[36px]  sm:w-[104px]",
            )}
          >
            <span className="font-sans whitespace-nowrap text-xs sm:text-sm">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
