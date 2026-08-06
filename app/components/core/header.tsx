import Image from "next/image";
import Link from "next/link";
import "../../styles/buttons.css";
export default function Header() {
  return (
    <div className="  relative min-h-screen  w-full">
      <Image
        src="/header-background.png"
        alt="Logo"
        fill
        priority
        className="object-cover
        "
      />

      <div className=" relative z-10 flex flex-row items-center justify-between p-4">
        <Link href="/">Dreamerz</Link>

        <div className="flex flex-row gap-4 ">
          <Link href="/" className=" " id="btn-outline">
            Log In
          </Link>
          <Link href="/" className=" " id="btn-solid">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
