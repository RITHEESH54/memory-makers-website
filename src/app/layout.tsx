
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import IntroAnimation from "@/components/IntroAnimation";

export const metadata: Metadata = {
  title: "Memory Makers | Crafting Unforgettable Experiences",
  description:
    "Discover extraordinary games, photo experiences and personalised gifts with Memory Makers.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <IntroAnimation />
        {children}
      </body>
    </html>
  );
}
