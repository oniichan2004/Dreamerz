"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Compass,
  Send,
  Bookmark,
  SlidersHorizontal,
  CircleUserRound,
  BadgeDollarSign,
  Users,
  Info,
  BookOpen,
  MessageSquare,
  FileText,
  LockKeyhole,
  LogOut,
} from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

import { Text } from "../ui/text";
import { Button } from "../ui/button";

export default function ProfileSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            type="button"
            className="
              relative
              h-9 w-9
              cursor-pointer
              overflow-hidden
              rounded-full
              sm:h-10 sm:w-10
              md:h-11 md:w-11
              lg:h-12 lg:w-12
            "
          />
        }
      >
        <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="
          h-dvh
          w-[90%]
          overflow-y-auto
          bg-white
          sm:max-w-[390px]
          md:max-w-[410px]
          lg:max-w-[420px]
        "
      >
        <SheetTitle className="sr-only">Profile menu</SheetTitle>

        <div
          className="
            flex
            min-h-full
            flex-col
            px-4
            pt-4
            pb-10
            sm:px-5
            sm:pt-5
            md:px-6
          "
        >
          {/* USER + BALANCE */}
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <div
                className="
                  relative
                  h-10 w-10
                  shrink-0
                  overflow-hidden
                  rounded-full
                  sm:h-11 sm:w-11
                  md:h-12 md:w-12
                  lg:h-14 lg:w-14
                "
              >
                <Image
                  src="/avatar.jpg"
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>

              <Text
                as="span"
                font="poppins"
                weight="bold"
                className="
                  truncate
                  text-sm
                  sm:text-base
                  md:text-[17px]
                  lg:text-lg
                "
              >
                Liviu Liviu
              </Text>
            </div>

            {/* BALANCE */}
            <div
              className="
                shrink-0
                rounded-lg
                bg-gradient-to-r
                from-cyan-300
                via-violet-300
                to-yellow-300
                p-px
                sm:rounded-xl
              "
            >
              <div
                className="
                  flex
                  h-9
                  items-center
                  rounded-[7px]
                  bg-white
                  px-2
                  sm:h-10
                  sm:rounded-[11px]
                  sm:px-2.5
                  md:h-11
                  md:px-3
                  lg:h-12
                "
              >
                <Text
                  as="span"
                  font="grotesk"
                  className="
                    text-[10px]
                    text-gray-500
                    sm:text-[11px]
                    md:text-xs
                    lg:text-[13px]
                  "
                >
                  Balance
                </Text>

                <Text
                  as="span"
                  font="grotesk"
                  weight="medium"
                  className="
                    ml-1
                    text-[10px]
                    sm:text-[11px]
                    md:text-xs
                    lg:text-[13px]
                  "
                >
                  0
                </Text>

                <Text
                  as="span"
                  className="
                    ml-1
                    bg-gradient-to-r
                    from-cyan-300
                    via-violet-300
                    to-yellow-300
                    bg-clip-text
                    text-xs
                    text-transparent
                    sm:text-[13px]
                    md:text-sm
                    lg:text-[15px]
                  "
                >
                  ✦
                </Text>
              </div>
            </div>
          </div>

          {/* RANDOM FULFILL */}
          <Button
            type="button"
            variant="gradient"
            className="
              mt-4
              h-9
              rounded-lg
              sm:mt-5
              sm:h-10
              md:h-11
              md:rounded-xl
              lg:h-11
            "
          >
            <Text
              as="span"
              font="poppins"
              weight="bold"
              className="
                text-[11px]
                sm:text-xs
                md:text-sm
                lg:text-[15px]
              "
            >
              Random Fulfill
            </Text>
          </Button>

          {/* DIVIDER */}
          <div className="my-4 w-full shrink-0 border-t border-gray-300 sm:my-5" />

          {/* MAIN MENU */}
          <div className="flex flex-col">
            <MenuItem
              href="/explore"
              icon={<Compass size={23} />}
              label="Explore"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/messenger"
              icon={<Send size={23} />}
              label="Messenger"
              badge="New"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/saved-posts"
              icon={<Bookmark size={23} />}
              label="Saved Posts"
              badge="New"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/dashboard"
              icon={<SlidersHorizontal size={23} />}
              label="Dashboard"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/profile"
              icon={<CircleUserRound size={23} />}
              label="My profile"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/pricing"
              icon={<BadgeDollarSign size={23} />}
              label="Pricing page"
              closeSheet={() => setOpen(false)}
            />
          </div>

          {/* DIVIDER */}
          <div className="my-4 w-full shrink-0 border-t border-gray-300 sm:my-5" />

          {/* SECOND MENU */}
          <div className="flex flex-col">
            <MenuItem
              href="/about-us"
              icon={<Users size={23} />}
              label="About us"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/how-it-works"
              icon={<Info size={23} />}
              label="How it works"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/faq"
              icon={<BookOpen size={23} />}
              label="FAQ"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/feedback"
              icon={<MessageSquare size={23} />}
              label="Leave Feedback"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/terms"
              icon={<FileText size={23} />}
              label="Terms and Conditions"
              closeSheet={() => setOpen(false)}
            />

            <MenuItem
              href="/privacy"
              icon={<LockKeyhole size={23} />}
              label="Privacy Policy"
              closeSheet={() => setOpen(false)}
            />
          </div>

          {/* DIVIDER */}
          <div className="my-4 w-full shrink-0 border-t border-gray-300 sm:my-5" />

          {/* LOGOUT */}
          <button
            type="button"
            className="
              group
              flex
              w-full
              cursor-pointer
              items-center
              gap-3
              rounded-lg
              px-2
              py-2.5
              text-red-500
              transition-colors
              hover:bg-red-50
              sm:gap-4
              sm:py-3
            "
          >
            <LogOut
              className="
                size-5
                sm:size-[21px]
                md:size-[22px]
                lg:size-[23px]
              "
            />

            <Text
              as="span"
              font="grotesk"
              className="
                text-sm
                text-red-500
                sm:text-[15px]
                md:text-base
                lg:text-[17px]
              "
            >
              Logout
            </Text>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MenuItem({
  href,
  icon,
  label,
  badge,
  closeSheet,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  badge?: string;
  closeSheet: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={closeSheet}
      className="
        group
        flex
        items-center
        justify-between
        rounded-lg
        px-2
        py-2.5
        transition-colors
        hover:bg-gray-100
        sm:py-3
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          text-gray-500
          transition-colors
          group-hover:text-black
          sm:gap-4
        "
      >
        {icon}

        <Text
          as="span"
          font="grotesk"
          className="
            text-sm
            text-inherit
            sm:text-[15px]
            md:text-base
            lg:text-[17px]
          "
        >
          {label}
        </Text>
      </div>

      {badge && (
        <Text
          as="span"
          font="grotesk"
          className="
            rounded-md
            bg-gradient-to-r
            from-cyan-200
            via-violet-200
            to-yellow-200
            px-1.5
            py-0.5
            text-[10px]
            text-black
            sm:px-2
            sm:text-[11px]
            md:text-xs
            lg:text-[13px]
          "
        >
          {badge}
        </Text>
      )}
    </Link>
  );
}
