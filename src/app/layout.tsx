import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Biplob Kumar Barmon",
  description: "I am Biplob Kumar Barmon. This is my personal website where I share my thoughts and experiences. I am a software engineer and I love to write code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
