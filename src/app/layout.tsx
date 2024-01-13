import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VeriDoc UrlShortner App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}