import React from "react";

import { Profile, ProfileUtils } from "@/models/profile";
import { profilesAtom } from "@/state/profile";
import * as Avatar from "@radix-ui/react-avatar";
import { type VariantProps, cva } from "class-variance-authority";
import { useRecoilValue } from "recoil";

import { MountCallback } from "@/lib/mounting_callbacks";
import { cn } from "@/lib/utils";

const FALLBACK_DELAY_MS = 600;

const avatarRootVariants = cva(
  "rounded-full items-center justify-center flex ring-1 ring-transparent flex-shrink-0",
  {
    variants: {
      size: {
        default: "w-8 h-8",
        sm: "w-6 h-6",
        xs: "w-5 h-5",
        xxs: "w-3.5 h-3.5",
      },
      shadow: {
        chat: "shadow-chat",
        none: "shadow-none",
      },
    },
    defaultVariants: {
      size: "default",
      shadow: "chat",
    },
  },
);

const avatarImageVariants = cva(
  "rounded-full object-cover bg-white outline-none",
  {
    variants: {
      size: {
        default: "w-8 h-8",
        sm: "w-6 h-6",
        xs: "w-5 h-5",
        xxs: "w-3.5 h-3.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const avatarTextVariants = cva(
  "uppercase select-none text-gray-3 overflow-hidden overflow-ellipsis",
  {
    variants: {
      size: {
        default: "text-sm pl-[0.5px] pt-[0.5px] font-semibold",
        sm: "text-sm pl-[0.5px] pt-[0.5px] font-semibold",
        xs: "text-xs pl-[0.5px] pt-[0.5px] font-semibold",
        xxs: "text-xxs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const avatarFallbackTextVariants = cva(
  "uppercase select-none text-white overflow-hidden overflow-ellipsis ",
  {
    variants: {
      size: {
        default: "text-sm pl-[0.5px] pt-[0.5px] font-semibold",
        sm: "text-sm pl-[0.5px] pt-[0.5px] font-semibold",
        xs: "text-xs pl-[0.5px] pt-[0.5px] font-semibold",
        xxs: "text-xxs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface ProfileAvatarProps
  extends VariantProps<typeof avatarRootVariants> {
  profile: Profile | string;
  className?: string;
  fallbackClassName?: string;
}

export function ProfileAvatar({
  profile,
  size,
  shadow,
  className,
  fallbackClassName,
}: ProfileAvatarProps) {
  if (typeof profile === "string") {
    return (
      <ProfileAvatarFromString
        profileId={profile}
        size={size}
        shadow={shadow}
        className={className}
      />
    );
  }

  return (
    <ProfileAvatarFromProfile
      profile={profile}
      size={size}
      shadow={shadow}
      className={className}
      fallbackClassName={fallbackClassName}
    />
  );
}

function ProfileAvatarFromString({
  profileId,
  size,
  shadow,
  className,
  fallbackClassName,
}: Omit<ProfileAvatarProps, "profile"> & { profileId: string }) {
  const workspaceProfiles = useRecoilValue(profilesAtom);

  const profile = workspaceProfiles.find((u) => u.id === profileId);

  if (!profile) {
    return <div className={cn("w-8 h-8 rounded-full bg-gray-4", className)} />;
  }

  return (
    <ProfileAvatarFromProfile
      profile={profile}
      size={size}
      shadow={shadow}
      className={className}
      fallbackClassName={fallbackClassName}
    />
  );
}

function ProfileAvatarFromProfile({
  profile,
  size,
  shadow,
  className,
  fallbackClassName,
}: ProfileAvatarProps & { profile: Profile }) {
  const backgroundColor = ProfileUtils.getAvatarColorBackgroundClass(profile);
  const [inFallbackMode, setInFallbackMode] = React.useState(false);

  return (
    <Avatar.Root
      className={cn(
        avatarRootVariants({ size, shadow }),
        inFallbackMode ? backgroundColor : "bg-gray-4",
      )}
    >
      {profile.avatarImage !== null ? (
        <>
          <Avatar.Image
            className={cn(avatarImageVariants({ size }), className)}
            src={profile.avatarImage}
            alt={profile.fullName}
          />
          <Avatar.Fallback
            className={cn(
              avatarFallbackTextVariants({ size }),
              fallbackClassName,
            )}
            delayMs={FALLBACK_DELAY_MS}
          >
            <MountCallback callback={() => setInFallbackMode(true)} />
            {ProfileUtils.getFirstInitial(profile)}
          </Avatar.Fallback>
        </>
      ) : (
        <span className={cn(avatarTextVariants({ size }))}>
          {/* CAMERON: Half pixel padding works - trying to optically center the text */}
          <MountCallback callback={() => setInFallbackMode(true)} />
          {ProfileUtils.getFirstInitial(profile)}
        </span>
      )}
    </Avatar.Root>
  );
}

export function AvatarFromText({ text }: { text: string }) {
  return (
    <Avatar.Root
      className={cn(
        "w-8 h-8 rounded-full items-center justify-center flex ring-1 ring-transparent flex-shrink-0 bg-gray-8",
      )}
    >
      <Avatar.Fallback className="uppercase select-none text-gray-3 text-sm overflow-hidden overflow-ellipsis font-semibold">
        {text.slice(0, 1)}
      </Avatar.Fallback>
    </Avatar.Root>
  );
}
