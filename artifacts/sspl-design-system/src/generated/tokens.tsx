/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#f3f6fa",
      "foreground": "#0d1f33",
      "border": "#dde3ec",
      "card": "#ffffff",
      "cardForeground": "#0d1f33",
      "popover": "#ffffff",
      "popoverForeground": "#0d1f33",
      "primary": "#0b1c2e",
      "primaryForeground": "#f0d800",
      "secondary": "#faf8ee",
      "secondaryForeground": "#0d1f33",
      "muted": "#edf1f7",
      "mutedForeground": "#4f6478",
      "accent": "#f0d800",
      "accentForeground": "#0b1c2e",
      "destructive": "#c0392b",
      "destructiveForeground": "#ffffff",
      "input": "#dde3ec",
      "ring": "#f0d800",
      "chart1": "#f0d800",
      "chart2": "#0b1c2e",
      "chart3": "#4f6478",
      "chart4": "#0e2240",
      "chart5": "#d4bc00",
      "sidebar": "#0b1c2e",
      "sidebarForeground": "#e8edf4",
      "sidebarBorder": "#1a3355",
      "sidebarPrimary": "#f0d800",
      "sidebarPrimaryForeground": "#0b1c2e",
      "sidebarAccent": "#1a3355",
      "sidebarAccentForeground": "#f0d800",
      "sidebarRing": "#f0d800"
    },
    "dark": {
      "background": "#0b1c2e",
      "foreground": "#edf1f7",
      "border": "#1e3355",
      "card": "#0e2240",
      "cardForeground": "#edf1f7",
      "popover": "#0e2240",
      "popoverForeground": "#edf1f7",
      "primary": "#f0d800",
      "primaryForeground": "#0b1c2e",
      "secondary": "#1a3355",
      "secondaryForeground": "#c8d4e0",
      "muted": "#122540",
      "mutedForeground": "#7a99b0",
      "accent": "#ffe000",
      "accentForeground": "#0b1c2e",
      "destructive": "#e74c3c",
      "destructiveForeground": "#0b1c2e",
      "input": "#1e3355",
      "ring": "#f0d800",
      "chart1": "#ffe000",
      "chart2": "#7eb3d4",
      "chart3": "#8aa0b8",
      "chart4": "#c8d4e0",
      "chart5": "#d4bc00",
      "sidebar": "#081524",
      "sidebarForeground": "#c8d4e0",
      "sidebarBorder": "#1a2d44",
      "sidebarPrimary": "#f0d800",
      "sidebarPrimaryForeground": "#0b1c2e",
      "sidebarAccent": "#122540",
      "sidebarAccentForeground": "#f0d800",
      "sidebarRing": "#f0d800"
    }
  },
  "fontFamily": {
    "sans": [
      "Source Sans 3",
      "sans-serif"
    ],
    "serif": [
      "Playfair Display",
      "serif"
    ],
    "mono": [
      "Menlo",
      "monospace"
    ]
  },
  "radius": "0.25rem",
  "spacing": "0.25rem"
} as const;

export type Tokens = typeof tokens;
export default tokens;
