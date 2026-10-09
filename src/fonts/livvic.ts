import localFont from "next/font/local";

// Unmodified Google Fonts files, SIL OFL 1.1; provenance beside the font files.
export const livvic = localFont({
  src: [
    { path: "./livvic/Livvic-Regular.ttf", weight: "400", style: "normal" },
    { path: "./livvic/Livvic-Medium.ttf", weight: "500", style: "normal" },
    { path: "./livvic/Livvic-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./livvic/Livvic-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-livvic",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
