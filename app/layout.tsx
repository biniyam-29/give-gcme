import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GCME-DS",
  description:
    "Built for the purpose or fundraising for great commission staff.",
  generator: "Biniyam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
