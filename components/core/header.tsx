"use client";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import "../styles/buttons.css";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isLightHeader = scrolled || !isHomePage;
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
            href="/"
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
