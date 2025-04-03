import "./globals.css";
import { Roboto, Playfair_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Magib | Portfolio",
  description: "Développeur web full-stack passionné",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
