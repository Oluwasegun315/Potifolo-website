"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const sizeConfig = {
  sm: {
    wrapper: "h-16 w-16 rounded-full",
    inner: "rounded-full",
    border: "rounded-full",
    text: "text-lg",
    sizes: "64px",
  },
  hero: {
    wrapper: "h-[5.25rem] w-[5.25rem] shrink-0 rounded-2xl sm:h-[6.25rem] sm:w-[6.25rem]",
    inner: "rounded-[0.75rem] sm:rounded-[0.85rem]",
    border: "rounded-2xl",
    text: "text-2xl",
    sizes: "(max-width: 640px) 84px, 100px",
  },
  md: {
    wrapper: "h-24 w-24 rounded-2xl sm:h-28 sm:w-28",
    inner: "rounded-[0.85rem]",
    border: "rounded-2xl",
    text: "text-xl",
    sizes: "112px",
  },
  lg: {
    wrapper: "mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-[320px]",
    inner: "min-h-[300px] rounded-2xl",
    border: "rounded-2xl",
    text: "text-4xl",
    sizes: "(max-width: 768px) 280px, 320px",
  },
} as const;

type ProfilePhotoProps = {
  size?: keyof typeof sizeConfig;
  className?: string;
  priority?: boolean;
  showName?: boolean;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ProfilePhoto({
  size = "lg",
  className,
  priority = false,
  showName = false,
}: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);
  const config = sizeConfig[size];
  const showImage = siteConfig.profileImage && !failed;
  const isCircle = size === "sm";

  return (
    <div className={cn("relative shrink-0", config.wrapper, className)}>
      <div
        className={cn(
          "absolute -inset-1 accent-gradient opacity-90 blur-sm",
          config.border
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute -inset-[2px] accent-gradient opacity-100",
          config.border
        )}
        aria-hidden
      />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden bg-[#12101c]",
          config.inner,
          isCircle && "rounded-full"
        )}
      >
        {showImage ? (
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.profileImageAlt}
            fill
            priority={priority}
            className="object-cover object-[center_15%]"
            sizes={config.sizes}
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className={cn(
              "flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-600/40 via-fuchsia-600/30 to-pink-600/20 font-display font-bold text-white",
              config.text
            )}
          >
            {getInitials(siteConfig.name)}
          </div>
        )}
      </div>
      {showName && (
        <p className="mt-4 text-center font-display text-lg font-semibold text-white sm:text-xl">
          {siteConfig.name}
        </p>
      )}
    </div>
  );
}
