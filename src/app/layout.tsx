import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Trampoline Assignment",
  description: "Trampoline Assignment",
};

const macFont = localFont({
  src: [
    {
      path: '../../public/fonts/blinkmacsystemfont-light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/blinkmacsystemfont-regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/blinkmacsystemfont-medium.ttf',
      weight: '500'
    },
  ],
  variable: '--font-blink-mac'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${macFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
