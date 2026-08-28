"use client";

import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import "../styles/buttons.css";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 flex items-center transition-all duration-300 ${
        scrolled
          ? "fixed top-0 left-0 w-full flex-row justify-between bg-white px-4 py-3"
          : "fixed top-0 left-0 w-full flex-col justify-center gap-4 p-7 pt-3 sm:flex-row sm:justify-between"
      }`}
    >
      <div className="text-white">
        <Link href="/">
          <Image
            src="/shooting-star.png"
            alt="shooting-star"
            width={200}
            height={40}
            className={`brightness-0 ${scrolled ? "w-24 sm:w-50" : "w-32 sm:w-50 invert"}`}
          />
        </Link>
      </div>
      <div className="flex flex-row gap-2 sm:gap-4 ">
        <Link
          href="/"
         
          className={` flex items-center justify-center btn-login  text-white h-[42px] w-[108px] rounded-[12px]  sm:h-[65px]  sm:w-[220px] hover:bg-gradient-to-r hover:from-[#84fad5] hover:via-[#e9c6ff] hover:to-[#f8ed84] hover:text-black  hover:shadow-[0_14px_30px_-12px_rgba(195,168,245,1)]`}
        >
          <span
            className={`${scrolled ? "text-sm text-black sm:text-base md:text-lg lg:text-xl" : "text-sm sm:text-base md:text-lg lg:text-xl"}  text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap`}
          >
            Log in
          </span>
        </Link>

        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "gradient" }),
            " h-[42px] w-[108px] rounded-[12px]  hover:shadow-[0_14px_30px_-12px_rgba(195,168,245,1)]  sm:h-[65px]  sm:w-[220px]",
          )}
        >
          <span className="font-sans whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl">
            Sign Up
          </span>
        </Link>

      
      </div>
    </header>
  );
}
