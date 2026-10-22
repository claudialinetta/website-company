import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: "Cieru Studio", template: "%s | Cieru Studio" },
  description: "Cieru Studio is a creative digital agency based in Jakarta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} d-flex flex-column min-vh-100`}>
        <Navbar />
        <main className="flex-grow-1 py-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
