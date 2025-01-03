import { createParser, useQueryStates } from "nuqs";
import * as Yup from "yup";

const profileOrderSchema = Yup.object({
  direction: Yup.string().oneOf(["asc", "desc"]).required(),
  dimension: Yup.string().oneOf(["createdAt", "updatedAt"]).required(),
});

type ProfileOrder = {
  dimension: "createdAt" | "updatedAt" | "fullName";
  direction: "asc" | "desc";
};

const profileFilterParser = createParser<ProfileOrder>({
  parse: (base64Value: string) => {
    // Base64 decode the value
    const value = Buffer.from(base64Value, "base64").toString("utf-8");
    const parsedValue = JSON.parse(value);

    try {
      profileOrderSchema.validateSync(parsedValue);
    } catch (e) {
      console.error(parsedValue);
      console.error(e);
      throw e;
    }

    return parsedValue as ProfileOrder;
  },
  serialize: (value: ProfileOrder) => {
    const jsonString = JSON.stringify(value);

    // Base64 encode the JSON string because I think it looks better
    return Buffer.from(jsonString).toString("base64");
  },
});

export default function useProfileOrderState() {
  return useQueryStates({
    order: profileFilterParser.withDefault({
      dimension: "createdAt",
      direction: "desc",
    }),
  });
}

export type ProfileOrderState = ReturnType<typeof useProfileOrderState>[0];
