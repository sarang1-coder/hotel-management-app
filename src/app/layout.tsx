import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import "./globals.css";
import Footer from "./components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hotel Management APp",
  description: "Find best hotels nearby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="font-normal">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
