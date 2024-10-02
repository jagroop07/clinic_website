import { Toaster } from "react-hot-toast";
import { Footer } from "./_components/Footer";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Suspense } from "react";
import ScrolltoTop from "./_components/ScrolltoTop";
export const dynamic = 'force-dynamic'
export const metadata = {
  title: "Knackglobal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrolltoTop/>
        <Navbar/>
        <Suspense>
        <Toaster position="top-center"/>
        {children}
        </Suspense>
        <Footer/>
      </body>
    </html>
  );
}
