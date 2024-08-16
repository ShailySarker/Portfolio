import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Coded by Shaily Sarker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
