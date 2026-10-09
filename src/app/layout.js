import { Luxurious_Roman, Outfit, Zain } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const luxury = Luxurious_Roman({
  variable: "--font-luxurious",
  subsets: ["latin"],
  weight: "400",
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: "300",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Abdiaziz | Build your idea with me",
  description: "Build your life and Be part of our community",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${luxury.variable}  ${zain.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark">
          {children}
      </body>
    </html>
  );
}
