import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { livvic } from "@/fonts/livvic";

export const metadata: Metadata = {
  title: "Development foundation",
  description: "Local application foundation for development review.",
  // Keep this foundation out of search results; review before production launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={livvic.variable}>
      <body className="min-h-screen bg-white text-[#333333]">
        {children}
      </body>
    </html>
  );
}
