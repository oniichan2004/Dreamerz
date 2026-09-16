"use client";

import Image from "next/image";
import { Text } from "@/components/ui/text";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  passwordRequirements,
  registerSchema,
  type RegisterFormValues,
} from "@/schemas/authorization-schema";
import { CircleAlert, CheckCircle2, Info } from "lucide-react";
import { RegisterPayload } from "@/api/types";
import { useMutation } from "@tanstack/react-query";
import { register as registerRequest } from "@/api/requests";

import { toast } from "sonner";
export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = useWatch({ control, name: "password" });

  const passwordChecks = passwordRequirements.map((req) => ({
    ...req,
    valid: req.test(password),
  }));

  const registerMutation = useMutation({
    mutationFn: (payload: RegisterPayload) => registerRequest(payload),
    onSuccess: (data) => {
      toast.success("Account created successfully!");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    registerMutation.mutate({ email: data.email, password: data.password });
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
            Create Account
          </Text>
          <Text as="span" font="grotesk" className="text-sm text-gray-500">
            Become a dreamer now and start fulfilling your dream!
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
                  : "border-gray-300",
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
          </div>{" "}
          <div className=" flex flex-col items-start gap-1  w-full max-w-100">
            <Text as="span" font="grotesk" className="text-sm">
              Password:
            </Text>
            <Input
              className="w-full rounded-md border border-gray-300 h-9  "
              type="password"
              {...register("password")}
            />
          </div>{" "}
          <div className=" flex flex-col items-start gap-1  w-full max-w-100 mb-5">
            <Text as="span" font="grotesk" className="text-sm">
              Repeat Password:
            </Text>
            <Input
              className={cn(
                "w-full rounded-md border h-9",
                errors.confirmPassword
                  ? "border-red-500 focus-visible:border-red-500"
                  : "border-gray-300",
              )}
              type="password"
              aria-invalid={!!errors.confirmPassword}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <div className="flex items-center gap-1">
                <CircleAlert className="size-3.5 text-red-500" />
                <Text as="span" font="grotesk" className="text-xs text-red-500">
                  {errors.confirmPassword.message}
                </Text>
              </div>
            )}
            <div className="flex flex-col gap-1 mt-2">
              {passwordChecks.map((check) => (
                <div key={check.key} className="flex items-center gap-1.5">
                  {check.valid ? (
                    <CheckCircle2 className="size-3.5 text-green-500" />
                  ) : (
                    <Info className="size-3.5 text-gray-400" />
                  )}
                  <Text
                    as="span"
                    font="grotesk"
                    className={cn(
                      "text-xs",
                      check.valid ? "text-green-600" : "text-gray-400",
                    )}
                  >
                    {check.label}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <Button
            type="submit"
            variant={isValid ? "gradient" : "secondary"}
            className={cn(
              "w-full max-w-90 h-11 rounded-xl  text-base",
              !isValid &&
                "bg-gray-200 text-gray-400 cursor-not-allowed hover:shadow-none",
            )}
          >
            Create Account
          </Button>
          <Text as="span" font="grotesk" className="text-sm text-gray-500">
            By continuing you accept{" "}
            <Link href="/terms" className="text-teal-500 hover:underline">
              Terms and Conditions
            </Link>
          </Text>
          <Text as="span" font="grotesk" className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-500 hover:underline">
              Log In
            </Link>
          </Text>
        </form>
      </div>
    </div>
  );
}
