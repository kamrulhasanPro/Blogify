import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Share/Navbar";
import Footer from "@/Components/Share/Footer";

export const metadata = {
  title: "Blogify",
  description: "Blogify is a news blog website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased max-w-7xl mx-auto !bg-primary/5`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-80px-278px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
