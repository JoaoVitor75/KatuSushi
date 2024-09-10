import { useState } from "react";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/button";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/tutorial.css";

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";

import Foods from "../assets/images/foods.png";
import Location from "../assets/images/location.png";
import Tracker from "../assets/images/trackOrder.png";
export default function Home() {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Katu Sushi" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">

          <h1>Sushi feito com paixão e tradição.</h1>
          <p>
            O sushi que você merece: fresco, autêntico e preparado na hora. Uma
            viagem de sabores diretamente do Japão, feita para encantar. Venha
            conhecer o equilíbrio perfeito entre tradição e modernidade em cada
            prato.
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>
      <section id="tutorial" className="tutorial-section py-xl">
        <div className="container">
          <h2 className="section-title">Como fazer seu pedido de sushi</h2>
          
          <div className="tutorial-steps">
            <div className="tutorial-step">
              <img src={Foods} alt="Selecionar comida" />
              <h3>1. Selecione sua comida</h3>
              <p>Navegue pelo nosso cardápio e escolha seus pratos favoritos.</p>
            </div>
            
            <div className="tutorial-step">
              <img src={Location} alt="Escolher localização" />
              <h3>2. Como retirar </h3>
              <p>Selecione entre retirar no local ou receber o pedido em sua casa.</p>
            </div>
            
            <div className="tutorial-step">
              <img src={Tracker} height={30} alt="Acompanhar pedido" />
              <h3>3. Acompanhe seu pedido</h3>
              <p>Você receberá atualizações em seu whats sobre o pedido.</p>
            </div>
          </div>
          
          <div className="cta-button">
            <Button text="Fazer pedido agora" />
          </div>
        </div>
      </section>
    </>
  );
}