
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import Navbar from "./Components/Navbar";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
 

   
   
    
      <body >
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/themes/light.css" />
        <Navbar />
        {children}
     
      </body>
    </html>
  );
}
