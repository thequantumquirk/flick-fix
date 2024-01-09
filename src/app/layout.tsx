import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { ThemeProvider } from "@/components/theme-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={jakarta.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
