import "./globals.css";
import SessionWrapper from "@/Components/Share/SessionWrapper";
import QueryProvider from "@/Components/Share/QueryProvider";
import HomeLayout from "@/Components/HomeLayout/HomeLayout";
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
            <HomeLayout>{children}</HomeLayout>
          </body>
        </SessionWrapper>
      </QueryProvider>
    </html>
  );
}
