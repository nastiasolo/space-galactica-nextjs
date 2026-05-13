import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";
import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WishlistProvider>
          <Navbar />
          <main>{children}</main>
        </WishlistProvider>
      </body>
    </html>
  );
}
