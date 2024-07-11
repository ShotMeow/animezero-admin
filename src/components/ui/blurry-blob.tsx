import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BlobProps extends HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="absolute -z-10 min-h-52 min-w-52">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "absolute -right-10 sm:-right-24 -top-28 size-60 sm:size-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 blur-3xl filter transition-all",
            className,
            firstBlobColor,
          )}
        ></div>
        <div
          className={cn(
            "absolute -left-40 -top-64 size-60 sm:size-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 blur-3xl filter transition-all",
            className,
            secondBlobColor,
          )}
        ></div>
      </div>
    </div>
  );
}
