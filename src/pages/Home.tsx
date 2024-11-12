import { useState, useEffect } from "react";
import { Header} from "../components/Header";
import { Hero } from "../components/Hero";
import { Tutorial} from "../components/Tutorial";
import { Testimonials } from "../components/Testimonials";
import { Combos } from "../components/Combos";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/tutorial.css";
import "../styles/contact.css";
import "../styles/testimonials.css";
import "../styles/combos.css";
import "../styles/footer.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (showMobileMenu) {
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      body.style.overflow = "auto";
      body.style.position = "static";
    }

    return () => {
      body.style.overflow = "auto";
      body.style.position = "static";
    };
  }, [showMobileMenu]);

  return (
    <>
      <Header 
        showMobileMenu={showMobileMenu} 
        setShowMobileMenu={setShowMobileMenu} 
      />
      <Hero/>
      <Tutorial/>
      <Testimonials/>
      <Combos/>
      <Contact/>
      <Footer/>
    </>
  );
}