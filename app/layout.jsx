import "./globals.css";
import Navbar from "@/Components/Share/Navbar";
import Footer from "@/Components/Share/Footer";
import { ToastContainer } from "react-toastify";
import SessionWrapper from "@/Components/Share/SessionWrapper";
import QueryProvider from "@/Components/Share/QueryProvider";
export const metadata = {
  title: "Blogify",
  description: "Blogify is a news blog website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryProvider>
        <SessionWrapper>
          <body className={`antialiased max-w-7xl mx-auto !bg-primary/5`}>
            <ToastContainer />
            <Navbar />
            <main className="min-h-[calc(100vh-80px-278px)]">{children}</main>
            <Footer />
          </body>
        </SessionWrapper>
      </QueryProvider>
    </html>
  );
}
