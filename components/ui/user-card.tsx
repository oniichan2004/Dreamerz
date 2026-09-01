import Image from "next/image";
import { Text } from "./text";
import type { Dream } from "@/types/dream";
import {
  Progress,
  ProgressIndicator,
  ProgressValue,
  ProgressTrack,
} from "./progress";
type userCardProps = {
  dream: Dream;
};
export default function UserCard({ dream }: userCardProps) {
  return (
    <div className="w-full text-center ">
      <div className="relative aspect-[4/3] w-full">
        <Image
          alt="card-background"
          src="/header-background.png"
          fill
          className="object-cover rounded-t-2xl"
        />
        <div className="absolute left-1/2  aspect-square w-[40%] -translate-x-1/2 translate-y-[20%] overflow-hidden rounded-full border-2 border-white">
          <Image
            alt="avatar"
            src={dream.avatar}
            fill
            className=" object-cover"
          />
        </div>
      </div>

      <div className=" p-8  flex flex-col gap-8  bg-white rounded-b-2xl ">
        <div className="">
          <Text
            className="font-bold text-2xl text-black/80 hover:underline cursor-pointer  line-clamp-1 md:text-4xl"
            font="grotesk"
          >
            {dream.firstName} {dream.lastName}
          </Text>
        </div>
        <div>
          <Text className=" text-xl text-black/40 line-clamp-2  md:text-2xl" font="grotesk">
            {dream.dream}
          </Text>
        </div>

        <div className="flex justify-between ">
          <Text className="font-bold text-lg md:text-xl" font="grotesk">
            Scope
          </Text>
          {dream.scope}%
        </div>

        <div>
          <Progress value={dream.scope}>
            <ProgressTrack className="h-3">
              <ProgressIndicator className="bg-linear-to-r from-sky-200 via-pink-200 to-amber-200" />
            </ProgressTrack>
          </Progress>
        </div>
      </div>
    </div>
  );
}
