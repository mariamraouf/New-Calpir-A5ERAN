import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
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
    extend: {
      colors: {
        /* The ink colour, and the dark ground.
           A near black with a green cast: it reads as ink on white, and as a
           deep brand colour when a whole band is filled with it. The token is
           called `navy` for historical reasons; only its value has changed. */
        navy: {
          DEFAULT: "#0C231C",
          900: "#0C231C",
          800: "#10392C",
          700: "#15543F",
          50: "#F2F8F5",
        },
        /* `deep` was briefly a bright emerald used for every filled band,
           which turned the whole site green. It now points at the same ink as
           `navy`, so a page that says `bg-deep` gets the dark ground it used
           to have. Kept as its own token so the two can be told apart again
           later without touching fifteen files. */
        deep: {
          DEFAULT: "#0C231C",
          900: "#0A1C17",
          800: "#0C231C",
          700: "#10392C",
          600: "#15543F",
        },
        /* The attention colour: terracotta, #B9794A.
           The shade chosen for the brand. It is used for the one thing on a
           screen that should be noticed and never for body text, so the scale
           below exists mostly so it can be read as well as seen: the flat
           shade is 3.6:1 on white, which is fine for a filled badge and not
           enough for a word, and `700` is 6.3:1, which is. The token is still
           called `gold` because several hundred places use that name; only
           its value has ever changed. */
        gold: {
          DEFAULT: "#B9794A",
          900: "#7A4923",
          800: "#8A5329",
          700: "#8A5329",
          600: "#985C31",
          500: "#A9683A",
          400: "#D2A47E",
          300: "#E3C4A8",
          100: "#F6E9DC",
          50: "#FAF2EA",
        },
        /* The same thing under an honest name. */
        clay: {
          DEFAULT: "#B9794A",
          900: "#7A4923",
          800: "#8A5329",
          700: "#8A5329",
          600: "#985C31",
          500: "#A9683A",
          400: "#D2A47E",
          300: "#E3C4A8",
          100: "#F6E9DC",
          50: "#FAF2EA",
        },
        /* Same palette under an honest name, for anything written from here on. */
        ink: {
          DEFAULT: "#0C231C",
          800: "#10392C",
          700: "#15543F",
          50: "#F2F8F5",
        },
        accent2: {
          DEFAULT: "#B9794A",
          400: "#D2A47E",
          50: "#FAF2EA",
        },
        /* Department tints. Pale grounds so a row of six cards has rhythm
           rather than reading as a spreadsheet. None of them is green, which
           is the point of them. */
        tint: {
          emerald: "#ECFDF5",
          "emerald-ink": "#047857",
          teal: "#F0FDFA",
          "teal-ink": "#0F766E",
          sky: "#F0F9FF",
          "sky-ink": "#0369A1",
          violet: "#F5F3FF",
          "violet-ink": "#6D28D9",
          rose: "#FAF2EA",
          "rose-ink": "#8A5329",
          lime: "#F7FEE7",
          "lime-ink": "#4D7C0F",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
