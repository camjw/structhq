const { fontFamily } = require("tailwindcss/defaultTheme");

const rawRadixColors = require("@radix-ui/colors");

function remapRadixColors(obj) {
  const remapped = {};

  for (const colorGroup in obj) {
    const matchGroups = colorGroup.match(
      /^(?<base>.+?)(?<dark>dark)?(?<p3>p3)?(?<alpha>a)?$/i
    )?.groups;

    if (!matchGroups?.["base"]) {
      // Unreachable. The regular expression will always match.
      throw new Error(`Invalid color name: ${colorName}`);
    }

    const { base, dark, p3, alpha } = matchGroups;

    if (dark || alpha || !p3) {
      continue;
    }

    const colorName = base.toLowerCase();

    remapped[colorName] = {};

    for (const shade in obj[colorGroup]) {
      if (obj[colorGroup].hasOwnProperty(shade)) {
        const match = shade.match(/\d+/);
        if (match) {
          const number = match[0];
          remapped[colorName][number] = obj[colorGroup][shade];
        }
      }
    }
  }

  return remapped;
}

const radixColors = remapRadixColors(rawRadixColors);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./models/**/*.{ts,tsx}",
    "./icons/**/*.{ts,tsx}",
    "./public/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      ...radixColors,
      gray: radixColors.slate,

      primary: radixColors.indigo,
      secondary: radixColors.crimson,

      danger: radixColors.red,
      success: radixColors.grass,
      warning: radixColors.amber,
      info: radixColors.iris,
      white: "#ffffff",
      black: "#000000",
      transparent: "#00000000",
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    extend: {
      fontFamily: {
        sans: ["Inter UI", ...fontFamily.sans],
        geist: ["Geist", ...fontFamily.sans],
        display: ["Inter Display", ...fontFamily.sans],
        mono: ["Jetbrains Mono", ...fontFamily.mono],
      },
      fontSize: {
        xxxxs: [".45rem", "1.25rem"],
        xxxs: [".625rem", "1.25rem"],
        xxs: [".6875rem", "1.25rem"],
        xs: [".75rem", "1.25rem"],
        sm: [".8125rem", "1.25rem"],
        base: ".875rem",
        lg: ["0.95rem", "1.4rem"],
        xl: ["1.125rem", "1.4rem"],
        "2xl": ["1.25rem", "1.4rem"],
        "3xl": ["1.5rem", "1.4rem"],
        "4xl": ["1.875rem", "1.4rem"],
        "5xl": ["2.25rem", "1.4rem"],
        "6xl": ["2.75rem", "1.4rem"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      transitionDuration: {
        50: "50ms",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
