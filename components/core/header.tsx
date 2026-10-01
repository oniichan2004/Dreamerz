"use client";

import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { useEffect, useState } from "react";
import { Search, Send, Bell } from "lucide-react";
import { useAuth } from "@/app/providers/auth-provider";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";

import { Input } from "../ui/input";
import { Text } from "../ui/text";

import "../styles/buttons.css";

export default function Header() {
  const { isAuthenticated, isLoading } = useAuth();

  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isLandingTop = isHomePage && !scrolled;
  const isLightHeader = !isLandingTop;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  if (isLoading) {
    return <header className="h-16 w-full bg-white" />;
  }

  // USER LOGAT
  if (isAuthenticated) {
    return (
      <header className="w-full bg-white">
        <div className="flex h-16 items-center justify-between px-3 shadow-md">
          <Link href="/newsfeed">
            <Image
              src="/shooting-star.png"
              alt="Logo"
              width={130}
              height={130}
              className="invert"
            />
          </Link>

          <div className="hidden w-full max-w-70 sm:block">
            <Input
              placeholder="Search..."
              className="border-2 border-gray-300 bg-gray-100"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-3 hover:bg-gray-200 sm:hidden">
              <Search size={20} className="text-gray-500" />
            </div>

            <div className="flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-3 hover:bg-gray-200">
              <Send size={20} className="text-gray-500" />
            </div>

            <div className="flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-3 hover:bg-gray-200">
              <Bell size={20} className="text-gray-500" />
            </div>

            <div className="hidden rounded-md bg-[linear-gradient(90deg,#6FE7D8_0%,#C9A7FF_55%,#FFE45C_100%)] p-px md:block">
              <div className="flex h-9 w-20 flex-col items-center justify-center gap-1 rounded-md bg-white p-2">
                <Text
                  as="span"
                  font="grotesk"
                  className="text-[13px] leading-none text-gray-600"
                >
                  Balance
                </Text>

                <div className="flex items-center justify-center">
                  <span className="text-[12px]">0</span>

                  <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-yellow-300 bg-clip-text text-[15px] text-transparent">
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

  // USER NELOGAT
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white px-4 py-2"
          : `px-4 py-3 ${
              isLightHeader ? "bg-white" : "bg-transparent"
            }`
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1800px] items-center ${
          isLandingTop
            ? "flex-col justify-center gap-4 sm:flex-row sm:justify-between"
            : "flex-row justify-between"
        }`}
      >
        <Link href="/">
          <Image
            src="/shooting-star.png"
            alt="Logo"
            width={200}
            height={40}
            className={`h-auto w-24 brightness-0 sm:w-32 ${
              isLightHeader ? "" : "invert"
            }`}
          />
        </Link>

        <div className="flex gap-2 sm:gap-4">
          <Link
            href="/login"
            className="group btn-login flex h-[30px] w-[72px] items-center justify-center rounded-[8px] sm:h-[36px] sm:w-[104px]"
          >
            <span
              className={`whitespace-nowrap text-xs group-hover:text-black sm:text-sm ${
                isLightHeader ? "text-black" : "text-white"
              }`}
            >
              Log in
            </span>
          </Link>

          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: "gradient" }),
              "h-[30px] w-[72px] rounded-[8px] sm:h-[36px] sm:w-[104px]",
            )}
          >
            <span className="whitespace-nowrap text-xs sm:text-sm">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
