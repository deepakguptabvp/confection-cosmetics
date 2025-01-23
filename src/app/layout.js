import { Inter } from "next/font/google";
import "./globals.css";

import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Confection-Cosmetics | Sweeten Your Beauty: Where Confection Meets Cosmetics!",
  description: "First eat, then glow",
  icons: {
    icon: "/favicon.ico",
    // You can also specify different sizes if needed:
    apple: '/apple-icon.png',
    shortcut: '/shortcut-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
