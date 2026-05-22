import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Galactica",
  description: "Your space travel agency",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WishlistProvider>
          <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </WishlistProvider>
      </body>
    </html>
  );
}
