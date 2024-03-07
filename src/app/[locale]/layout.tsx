import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Breadcrumb, Footer, Header } from "@Components";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Online Shopping website",
};

const locales = ["en", "ge"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="margin-auto container px-[10px]">
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
