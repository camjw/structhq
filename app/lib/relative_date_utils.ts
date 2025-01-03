import { DateTime } from "luxon";

export default class RelativeDateUtils {
  static getCleanFromISODate(date: string) {
    const relativeTime = DateTime.fromISO(date).toRelative();

    if (relativeTime === "0 seconds ago") {
      return "Just now";
    }

    return relativeTime;
  }

  static getCleanFromJSDate(date: Date) {
    const relativeTime = DateTime.fromJSDate(date).toRelative();

    if (relativeTime === "0 seconds ago" || relativeTime === "in 0 seconds") {
      return "Just now";
    }

    return relativeTime;
  }
}
