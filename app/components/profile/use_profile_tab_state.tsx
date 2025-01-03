import { createParser, useQueryState } from "nuqs";

export enum ProfileTab {
  DETAILS = "details",
  FACTS = "facts",
  CHATS = "chats",
}

const profileTabParser = createParser<ProfileTab>({
  parse: (base64Value: string) => {
    // Base64 decode the value
    const value = Buffer.from(base64Value, "base64").toString("utf-8");
    return value as ProfileTab;
  },
  serialize: (value: ProfileTab) => {
    return Buffer.from(value).toString("base64");
  },
});

export default function useProfileTabState() {
  return useQueryState(
    "tab",
    profileTabParser
      .withOptions({ clearOnDefault: true })
      .withDefault(ProfileTab.DETAILS),
  );
}
