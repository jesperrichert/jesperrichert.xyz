import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jesperrichert.xyz",
  description: "Personal website of Jesper Richert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navbar /> 
      
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
