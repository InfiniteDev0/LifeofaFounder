import { Caveat_Brush, Geist_Mono, Outfit, Zain } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

const caveat = Caveat_Brush({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Founders Diary",
  description: "Build your life and Be part of our community",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable}  ${zain.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Navbar />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
