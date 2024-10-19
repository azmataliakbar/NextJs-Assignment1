import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Assignment 01",
  description: "Created Five Routes ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        /* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */
      >
        {children}
      </body>
    </html>
  );
}
