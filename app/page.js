import Image from "next/image";
import Navbar from "./Navbar/page";
import Home from "./Home/page";
import { Poppins } from "next/font/google";
import About from "./About/page";
import Experience from "./Experience/page";
import Project from "./Project/page";
import Contact from "./Contact/page";
import Github from "./Github/page";
import Footer from "./Footer/page";

  const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Optional weights
  variable: '--font-poppins',   // Optional for using as CSS variable
});

export default function main() {

  return (
    <>
     <section className={poppins.className}>
         <Navbar/>
        <Home/>
        <About/>
        <Experience/>
        <Project/>
       
        <Contact/>
        <Footer/>
     </section>
    </>
  );
}
