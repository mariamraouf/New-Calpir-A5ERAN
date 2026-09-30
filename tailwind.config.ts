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
        /* The ink colour.
           Not black. A near black reads as a default and, on a page whose
           whole identity is green, as an accident. This is a deep green dark
           enough to carry a headline and warm enough to look chosen. The
           token is still called `navy` because several hundred places use
           it; only the value has ever changed. */
        navy: {
          DEFAULT: "#123A2B",
          900: "#123A2B",
          800: "#17513A",
          700: "#1C6B4B",
          50: "#F1FAF5",
        },
        /* The dark ground. Where a band is filled, it is filled with green,
           not with something that reads as black on a phone in daylight. */
        deep: {
          DEFAULT: "#065F46",
          900: "#044E39",
          800: "#065F46",
          700: "#047857",
          600: "#059669",
        },
        /* The one attention colour. Rose, not amber: on a green and white
           page a warm yellow disappears into the emerald and reads as a
           warning, where a rose badge is seen once and remembered. */
        gold: {
          DEFAULT: "#E11D48",
          400: "#FB7185",
          50: "#FFF1F2",
        },
        /* Department tints.
           Six white boxes in a row is not a design, it is a spreadsheet. Each
           department carries its own pale ground and its own ink so a page of
           six of them has rhythm. They are all low chroma so none of them
           fights the emerald, and none of them is orange or navy. */
        tint: {
          emerald: "#ECFDF5",
          "emerald-ink": "#047857",
          teal: "#F0FDFA",
          "teal-ink": "#0F766E",
          sky: "#F0F9FF",
          "sky-ink": "#0369A1",
          violet: "#F5F3FF",
          "violet-ink": "#6D28D9",
          rose: "#FFF1F2",
          "rose-ink": "#BE123C",
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
