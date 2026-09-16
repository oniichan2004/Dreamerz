"use client";

import Image from "next/image";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { loginSchema, type LoginFormValues } from "@/schemas/authorization-schema";
import { CircleAlert } from "lucide-react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (_data: LoginFormValues) => {
    // TODO: send data to the backend
  };

  return (
    <div className="w-full min-h-screen flex items-start pt-30 justify-center bg-linear-135 from-[#E8F5F3] via-[#FAF8F1] to-[#FDF6D8] lg:mb-5">
      <div className="flex flex-col   items-center  px-6 sm:px-10 md:px-16 xl:px-20 gap-10 pb-10 pt-5 bg-white h-auto w-full max-w-170   shadow-xl rounded-xl ">
        <div className="flex flex-col gap-2 items-center justify-center  ">
          <Image
            width={170}
            height={170}
            src="/shooting-star.png"
            alt="logo"
            className="invert"
          />
          <Text as="span" font="caveat" className="text-5xl font-bold">
            Welcome Back
          </Text>
        </div>
        <form
          className=" w-full  flex flex-col items-center justify-center gap-5 "
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className=" flex flex-col gap-1  w-full max-w-100">
            <Text as="span" font="grotesk" className="text-sm">
              E-mail address:
            </Text>
            <Input
              className={cn(
                "w-full rounded-md border h-9",
                errors.email
                  ? "border-red-500 focus-visible:border-red-500"
                  : "border-gray-300"
              )}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <div className="flex items-center gap-1">
                <CircleAlert className="size-3.5 text-red-500" />
                <Text as="span" font="grotesk" className="text-xs text-red-500">
                  {errors.email.message}
                </Text>
              </div>
            )}
          </div>
          <div className=" flex flex-col items-start gap-1  w-full max-w-100 mb-5">
            <div className="flex w-full items-center justify-between">
              <Text as="span" font="grotesk" className="text-sm">
                Password:
              </Text>
              <Link
                href="/forgot-password"
                className="text-xs text-teal-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              className={cn(
                "w-full rounded-md border h-9",
                errors.password
                  ? "border-red-500 focus-visible:border-red-500"
                  : "border-gray-300"
              )}
              type="password"
              aria-invalid={!!errors.password}
              {...register("password")}
            />
            {errors.password && (
              <div className="flex items-center gap-1">
                <CircleAlert className="size-3.5 text-red-500" />
                <Text as="span" font="grotesk" className="text-xs text-red-500">
                  {errors.password.message}
                </Text>
              </div>
            )}
          </div>
          <Button
            type="submit"
            variant={isValid ? "gradient" : "secondary"}
            className={cn(
              "w-full max-w-90 h-11 rounded-xl  text-base",
              !isValid &&
                "bg-gray-200 text-gray-400 cursor-not-allowed hover:shadow-none"
            )}
          >
            Log in
          </Button>
          <Text as="span" font="grotesk" className="text-sm text-gray-500">
            Not a dreamer yet?{" "}
            <Link href="/register" className="text-teal-500 hover:underline">
              Sign Up
            </Link>
          </Text>
        </form>
      </div>
    </div>
  );
}
