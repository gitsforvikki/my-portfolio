import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, MobileHeader } from "@/components/headers";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My PortFolio ",
  description: "Develop using the nextjs and Tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Header />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
