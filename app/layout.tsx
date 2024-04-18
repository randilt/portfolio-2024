import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Randil Tharusha Withanage",
  description:
    "Randil Tharusha's Portfolio Website showcasing his skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
