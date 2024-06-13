import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Footer from "./components/Footer/Footer";

const poppins = Noto_Serif({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BurgerApp",
  description: "Simple WebApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ResponsiveNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
