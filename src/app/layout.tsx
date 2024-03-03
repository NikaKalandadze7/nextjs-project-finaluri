import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Breadcrumb, Footer, Header } from "@Components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Online Shopping website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="margin-auto container">
          <Breadcrumb
            homeElement={"Home"}
            activeClasses="text-slate-700  "
            containerClasses="text-sm breadcrumbs "
            listClasses="hover:underline mx-2 font-bold"
            capitalizeLinks
          />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
