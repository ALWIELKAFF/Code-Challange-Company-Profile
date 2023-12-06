import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Riot Games Company",
  description:
    "this web is made by person who play riot games and this project for my portofolio and code challenge",
  openGraph: {
    title: "Riot Games Company",
    description:
      "this web is made by person who play riot games and this project for my portofolio and code challenge",
    images: "https://www.facebook.com/RiotGames/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Footer />{" "}
      </body>
    </html>
  );
}
