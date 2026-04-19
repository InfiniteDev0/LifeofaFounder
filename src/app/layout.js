import { Caveat_Brush,  Geist_Mono, Zain } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const caveat = Caveat_Brush({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Life of a Founder",
  description: "Build your life and Be part of our community",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable}  ${zain.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
