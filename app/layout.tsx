import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Providers from "@/providers";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Optional: add specific weights if needed
});

export const metadata: Metadata = {
  title: "BeThere",
  description: "Event, Simplified, Presence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${beVietnamPro.variable} antialiased font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
