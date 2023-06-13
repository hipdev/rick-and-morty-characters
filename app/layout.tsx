import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oh Geez Rick! - Rick and Morty list of characters",
  description: "Rick and Morty list of characters",
  category: "",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: ["Rick and Morty", "Rick", "Morty", "Characters", "List"],
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
