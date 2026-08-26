'use client'

import Image from "next/image";
import Link from "next/link";
import "../../styles/buttons.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll)
    return ()=> {
      window.removeEventListener("scroll", handleScroll)
    }
  },[]);

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
              src="/shoting-star.png"
              alt="shooting-star"
              width={200}
              height={40}
              className={`brightness-0 ${scrolled ? "w-24 sm:w-50" : "w-32 sm:w-50 invert"}`}
            />
          </Link>
        </div>
        <div className="flex flex-row gap-1 sm:gap-4 ">
          <Link href="/" id="btn-outline"   className={scrolled ? "scrolled-btn" : ""}>
            <span   className={`${scrolled ? "text-sm text-black sm:text-base md:text-lg lg:text-xl" : "text-sm sm:text-base md:text-lg lg:text-xl"} whitespace-nowrap`} >Log in</span>
          </Link>
          <Link href="/" className={scrolled ? "scrolled-btn" : ""} id="btn-solid">
            <span className="font-sans whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl">Sign Up</span>
          </Link>
        </div>
      </header>
  );
}
