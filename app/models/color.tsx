import * as rawRadixColors from "@radix-ui/colors";
import _ from "lodash";

function remapRadixColors(obj: typeof rawRadixColors) {
  const remapped: { [color: string]: { [colorGrade: string]: string } } = {};

  for (const colorGroup in obj) {
    remapped[colorGroup] = {};

    // @ts-ignore
    for (const shade in obj[colorGroup]) {
      // @ts-ignore
      if (obj[colorGroup].hasOwnProperty(shade)) {
        const match = shade.match(/\d+/);
        if (match) {
          const number = match[0];

          // @ts-ignore
          remapped[colorGroup][number] = obj[colorGroup][shade];
        }
      }
    }
  }

  remapped.transparent = {
    1: "transparent",
    2: "transparent",
    3: "transparent",
    4: "transparent",
    5: "transparent",
    6: "transparent",
    7: "transparent",
    8: "transparent",
    9: "transparent",
    10: "transparent",
    11: "transparent",
    12: "transparent",
  };

  return remapped;
}

export const fullColorMap = remapRadixColors(rawRadixColors);

type ColorGrade =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export const colorGrades: ColorGrade[] = [
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

export const pieChartColorGrades: ColorGrade[] = [
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

type ColorMap = {
  [key in ColorGrade]?: string;
};

export enum Color {
  GRAY = "gray",
  SLATE = "slate",
  RED = "red",
  ORANGE = "orange",
  AMBER = "amber",
  YELLOW = "yellow",
  LIME = "lime",
  GREEN = "green",
  GRASS = "grass",
  JADE = "jade",
  TEAL = "teal",
  CYAN = "cyan",
  SKY = "sky",
  BLUE = "blue",
  INDIGO = "indigo",
  VIOLET = "violet",
  PURPLE = "purple",
  PLUM = "plum",
  PINK = "pink",
  CRIMSON = "crimson",
  TRANSPARENT = "transparent",
}

export class ColorUtils {
  static getColorGrade(color: Color, grade: ColorGrade): string {
    if (fullColorMap[color]) {
      // @ts-ignore
      return fullColorMap[color][grade];
    }

    // @ts-ignore
    return fullColorMap.gray[grade];
  }

  static getRandomColor(exceptions: Color[] = [Color.TRANSPARENT]): Color {
    const colorsArray = Object.values(Color).filter(
      (c) => !exceptions.includes(c),
    );
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomIndex];
  }

  static getAvatarColorBackgroundClass(color: Color): string {
    // Explicity writing out the classes so they don't get purged
    switch (color) {
      case Color.RED:
        return "bg-red-9";
      case Color.ORANGE:
        return "bg-orange-9";
      case Color.YELLOW:
        return "bg-yellow-9";
      case Color.AMBER:
        return "bg-amber-9";
      case Color.LIME:
        return "bg-lime-9";
      case Color.GREEN:
        return "bg-green-9";
      case Color.JADE:
        return "bg-jade-9";
      case Color.TEAL:
        return "bg-teal-9";
      case Color.CYAN:
        return "bg-cyan-9";
      case Color.SKY:
        return "bg-sky-9";
      case Color.BLUE:
        return "bg-blue-9";
      case Color.INDIGO:
        return "bg-indigo-9";
      case Color.VIOLET:
        return "bg-violet-9";
      case Color.PURPLE:
        return "bg-purple-9";
      case Color.PLUM:
        return "bg-plum-9";
      case Color.PINK:
        return "bg-pink-9";
      case Color.CRIMSON:
        return "bg-crimson-9";
      case Color.SLATE:
        return "bg-slate-9";
      case Color.GRAY:
        return "bg-gray-9";
      case Color.GRASS:
        return "bg-grass-9";
      case Color.TRANSPARENT:
        return "bg-transparent";
    }
  }

  static getAvatarColorBackgroundHex(color: Color): string {
    // This is for use in rich text editor
    return this.getAvatarColor(color, "8");
  }

  static getCursorColor(color: Color): string {
    // This is for use in rich text editor
    return this.getAvatarColor(color, "8");
  }

  static getAvatarColorBackgroundSecondaryClass(color: Color): string {
    // Explicity writing out the classes so they don't get purged
    switch (color) {
      case Color.RED:
        return "hover:ring-red-3 focus:ring-red-3";
      case Color.ORANGE:
        return "hover:ring-orange-3 focus:ring-orange-3";
      case Color.YELLOW:
        return "hover:ring-yellow-3 focus:ring-yellow-3";
      case Color.AMBER:
        return "hover:ring-amber-3 focus:ring-amber-3";
      case Color.LIME:
        return "hover:ring-lime-3 focus:ring-lime-3";
      case Color.GREEN:
        return "hover:ring-green-3 focus:ring-green-3";
      case Color.JADE:
        return "hover:ring-jade-3 focus:ring-jade-3";
      case Color.TEAL:
        return "hover:ring-teal-3 focus:ring-teal-3";
      case Color.CYAN:
        return "hover:ring-cyan-3 focus:ring-cyan-3";
      case Color.SKY:
        return "hover:ring-sky-3 focus:ring-sky-3";
      case Color.BLUE:
        return "hover:ring-blue-3 focus:ring-blue-3";
      case Color.INDIGO:
        return "hover:ring-indigo-3 focus:ring-indigo-3";
      case Color.VIOLET:
        return "hover:ring-violet-3 focus:ring-violet-3";
      case Color.PURPLE:
        return "hover:ring-purple-3 focus:ring-purple-3";
      case Color.PLUM:
        return "hover:ring-plum-3 focus:ring-plum-3";
      case Color.PINK:
        return "hover:ring-pink-3 focus:ring-pink-3";
      case Color.CRIMSON:
        return "hover:ring-crimson-3 focus:ring-crimson-3";
      case Color.SLATE:
        return "hover:ring-slate-3 focus:ring-slate-3";
      case Color.GRAY:
        return "hover:ring-gray-3 focus:ring-gray-3";
      case Color.GRASS:
        return "hover:ring-grass-3 focus:ring-grass-3";
      case Color.TRANSPARENT:
        return "hover:ring-transparent focus:ring-transparent";
    }
  }

  static getColorBackgroundHoverClass(
    color: Color,
    grade: ColorGrade = "4",
  ): string {
    switch (color) {
      case Color.RED:
        return `hover:bg-red-${grade}`;
      case Color.ORANGE:
        return `hover:bg-orange-${grade}`;
      case Color.YELLOW:
        return `hover:bg-yellow-${grade}`;
      case Color.AMBER:
        return `hover:bg-amber-${grade}`;
      case Color.LIME:
        return `hover:bg-lime-${grade}`;
      case Color.GREEN:
        return `hover:bg-green-${grade}`;
      case Color.JADE:
        return `hover:bg-jade-${grade}`;
      case Color.TEAL:
        return `hover:bg-teal-${grade}`;
      case Color.CYAN:
        return `hover:bg-cyan-${grade}`;
      case Color.SKY:
        return `hover:bg-sky-${grade}`;
      case Color.BLUE:
        return `hover:bg-blue-${grade}`;
      case Color.INDIGO:
        return `hover:bg-indigo-${grade}`;
      case Color.VIOLET:
        return `hover:bg-violet-${grade}`;
      case Color.PURPLE:
        return `hover:bg-purple-${grade}`;
      case Color.PLUM:
        return `hover:bg-plum-${grade}`;
      case Color.PINK:
        return `hover:bg-pink-${grade}`;
      case Color.CRIMSON:
        return `hover:bg-crimson-${grade}`;
      case Color.SLATE:
        return `hover:bg-slate-${grade}`;
      case Color.GRAY:
        return `hover:bg-gray-${grade}`;
      case Color.GRASS:
        return `hover:bg-grass-${grade}`;
      case Color.TRANSPARENT:
        return `hover:bg-transparent`;
    }
  }

  static getAvatarColor(color: Color, grade: ColorGrade): string {
    switch (color) {
      case Color.RED:
        return fullColorMap.red[grade];
      case Color.ORANGE:
        return fullColorMap.orange[grade];
      case Color.YELLOW:
        return fullColorMap.yellow[grade];
      case Color.GREEN:
        return fullColorMap.green[grade];
      case Color.BLUE:
        return fullColorMap.blue[grade];
      case Color.PURPLE:
        return fullColorMap.purple[grade];
      case Color.PINK:
        return fullColorMap.pink[grade];
      case Color.AMBER:
        return fullColorMap.amber[grade];
      case Color.LIME:
        return fullColorMap.lime[grade];
      case Color.JADE:
        return fullColorMap.jade[grade];
      case Color.TEAL:
        return fullColorMap.teal[grade];
      case Color.CYAN:
        return fullColorMap.cyan[grade];
      case Color.SKY:
        return fullColorMap.sky[grade];
      case Color.INDIGO:
        return fullColorMap.indigo[grade];
      case Color.VIOLET:
        return fullColorMap.violet[grade];
      case Color.PLUM:
        return fullColorMap.plum[grade];
      case Color.CRIMSON:
        return fullColorMap.crimson[grade];
      case Color.SLATE:
        return fullColorMap.slate[grade];
      case Color.GRAY:
        return fullColorMap.gray[grade];
      case Color.GRASS:
        return fullColorMap.grass[grade];
      case Color.TRANSPARENT:
        return "transparent";
    }
  }

  static getColorHexCode(color: Color, grade: ColorGrade): string {
    const stringifiedColor = color?.toString();

    if (
      Object.values(Color)
        .map((c) => c.toString())
        .includes(stringifiedColor)
    ) {
      return fullColorMap[color as Color][grade];
    }

    return fullColorMap.purple[grade];
  }
}

export const COLOR_MAP: {
  [colorName: string]: ColorMap;
} = {
  gray: _.pick(fullColorMap.gray, colorGrades),
  yellow: _.pick(fullColorMap.yellow, colorGrades),
  orange: _.pick(fullColorMap.orange, colorGrades),
  red: _.pick(fullColorMap.red, colorGrades),
  purple: _.pick(fullColorMap.purple, colorGrades),
  indigo: _.pick(fullColorMap.indigo, colorGrades),
  blue: _.pick(fullColorMap.blue, colorGrades),
  teal: _.pick(fullColorMap.teal, colorGrades),
  green: _.pick(fullColorMap.green, colorGrades),
  emerald: _.pick(fullColorMap.emerald, colorGrades),
} as const;

export const TEAM_ICON_COLOR_GRADE: ColorGrade = "8";
export const TEAM_ICON_BG_COLOR_GRADE: ColorGrade = "4";
