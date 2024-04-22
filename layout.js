import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Coffee - Fund your projects with coffee",
  description: "This website is crowdfunding for platform for creators.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">

          {children}
        </div>
        <Footer />
      </body>
    </html >
  )
}
