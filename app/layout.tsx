import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Diary of the Death",
  description: "An illustrated universe and storytelling project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
