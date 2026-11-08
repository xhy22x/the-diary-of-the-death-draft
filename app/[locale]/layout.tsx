import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { getStaticParams } from "@/locales/server";

export const metadata: Metadata = {
  title: "The Diary of the Death",
  description: "An illustrated universe and storytelling project.",
};

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;
  return (
    <html lang="en">
      <body>
        <Providers locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
