import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});
export const metadata = {
  title: "Portfolio",
  description: "Coded by Shaily Sarker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
