import { Color, ColorUtils } from "@/models/color";
import { User } from "@/models/user";
import { Workspace } from "@/models/workspace";

export type Profile = {
  id: string;
  workspace: Workspace["id"];
  user: User["id"];

  createdAt: string;
  updatedAt: string;

  subscribeToChangelog: boolean;

  fullName: string;
  preferredName: string;

  avatarColor: Color;
  avatarImage: string;
};

export class ProfileUtils {
  static getOrderedProfiles(
    profiles: Profile[],
    orderDimension: "createdAt" | "updatedAt" | "fullName",
    order: "asc" | "desc",
  ) {
    const newProfiles = [...profiles];

    return newProfiles.sort((a, b) => {
      if (order === "asc") {
        return a[orderDimension] > b[orderDimension] ? 1 : -1;
      } else {
        return a[orderDimension] < b[orderDimension] ? 1 : -1;
      }
    });
  }

  static getFirstInitial(profile: Profile): string {
    if (profile && profile.preferredName) {
      return profile.preferredName[0].toUpperCase();
    }

    if (profile && profile.fullName) {
      return profile.fullName[0].toUpperCase();
    }

    return "";
  }

  static getAvatarColorBackgroundClass(profile: Profile): string {
    return ColorUtils.getAvatarColorBackgroundClass(profile.avatarColor);
  }

  static getAvatarColorBackgroundHex(profile: Profile): string {
    return ColorUtils.getAvatarColorBackgroundHex(profile.avatarColor);
  }

  static getCursorColor(profile: Profile): string {
    // This is for use in rich text editor
    return ColorUtils.getCursorColor(profile.avatarColor);
  }

  static getAvatarColorBackgroundSecondaryClass(profile: Profile): string {
    return ColorUtils.getAvatarColorBackgroundSecondaryClass(
      profile.avatarColor,
    );
  }
}
