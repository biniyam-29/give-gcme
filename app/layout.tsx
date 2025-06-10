import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GCME-DS",
  description:
    "Built for the purpose or fundraising for great commission staff.",
  generator: "Biniyam",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/favicon.png',
        type: 'image/png',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  ); 
}
