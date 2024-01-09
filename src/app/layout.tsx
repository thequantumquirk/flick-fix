import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlickFix",
  description:
    "FlickFix is a movie recommendation application providing top-rated movies, detailed movie information, and a cart feature for favorite movies. It supports real-time updates and state management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
