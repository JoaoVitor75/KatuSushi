import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/button";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/tutorial.css";
import "../styles/contact.css";
import "../styles/testimonials.css";
import "../styles/combos.css";


import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";

import ClienteUm from "../assets/images/cliente1.jpg";
import ClienteDois from "../assets/images/cliente2.png";
import ClienteTres from "../assets/images/cliente3.jpg";

import Foods from "../assets/images/foods.png";
import Location from "../assets/images/location.png";
import Tracker from "../assets/images/trackOrder.png";

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
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Katu Sushi" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#tutorial">Como pedir</a>
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
                      <a href="#tutorial">Como pedir</a>
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
              <h3>1. Selecione o seu pedido</h3>
              <p>
                Navegue pelo nosso cardápio e escolha seus pratos favoritos.
              </p>
            </div>

            <div className="tutorial-step">
              <img src={Location} alt="Escolher localização" />
              <h3>2. Como retirar </h3>
              <p>
                Selecione entre retirar no local ou receber o pedido em sua
                casa.
              </p>
            </div>

            <div className="tutorial-step">
              <img src={Tracker} height={30} alt="Acompanhar pedido" />
              <h3>3. Acompanhe seu pedido</h3>
              <p>Você receberá atualizações em seu whats sobre o pedido.</p>
            </div>
          </div>

          <section id="testimonials" className="testimonials-section py-xl">
            <div className="container">
              <h2 className="section-title">O que nossos clientes dizem</h2>
              <div className="testimonial-carousel">
                <div className="testimonial-track">
                  <div className="testimonial-card">
                    <img
                      src="{ClienteUm}"
                      alt="TobeyJaguara"
                      className="testimonial-image"
                    />
                    <p>
                      "O melhor sushi que já comi! Sempre fresco e delicioso."
                    </p>
                    <h4>TobeyJaguara</h4>
                  </div>
                  <div className="testimonial-card">
                    <img
                      src={ClienteDois}
                      alt="Garfield"
                      className="testimonial-image"
                    />
                    <p>
                      "Atendimento impecável e pratos incríveis. Recomendo!"
                    </p>
                    <h4>Garfield</h4>
                  </div>
                  <div className="testimonial-card">
                    <img
                      src={ClienteTres}
                      alt="Zendaya"
                      className="testimonial-image"
                    />
                    <p>
                      "A experiência gastronômica que todo amante de sushi
                      merece."
                    </p>
                    <h4>Zendaya</h4>
                  </div>
                  <div className="testimonial-card">
                    <img
                      src={ClienteUm}
                      alt="TobeyJaguara"
                      className="testimonial-image"
                    />
                    <p>
                      "O melhor sushi que já comi! Sempre fresco e delicioso."
                    </p>
                    <h4>TobeyJaguara</h4>
                  </div>
                  <div className="testimonial-card">
                    <img
                      src={ClienteDois}
                      alt="Garfield"
                      className="testimonial-image"
                    />
                    <p>
                      "Atendimento impecável e pratos incríveis. Recomendo!"
                    </p>
                    <h4>Garfield</h4>
                  </div>
                  <div className="testimonial-card">
                    <img
                      src={ClienteTres}
                      alt="Zendaya"
                      className="testimonial-image"
                    />
                    <p>
                      "A experiência gastronômica que todo amante de sushi
                      merece."
                    </p>
                    <h4>Zendaya</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="combos" className="combos-section py-xl">
            <div className="container">
              <h2 className="section-title">Nossos Combos</h2>
              <div className="combo-cards">
                <div className="combo-card">
                  <h3>Combo Simples</h3>
                  <div className="price">R$ 89,90</div>
                  <ul className="combo-features">
                    <li>20 peças</li>
                    <li>2 Hots</li>
                    <li>1 Temaki</li>
                    <li>Refrigerante 1L</li>
                    <li>4 Joys</li>
                  </ul>
                  <Button text="Pedir agora" />
                </div>

                <div className="combo-card featured">
                  <h3>Combo Casal</h3>
                  <div className="price">R$ 149,90</div>
                  <ul className="combo-features">
                    <li>40 peças</li>
                    <li>4 Hots</li>
                    <li>2 Temakis</li>
                    <li>Refrigerante 2L</li>
                    <li>2 Harumakis</li>
                  </ul>
                  <Button text="Pedir agora" />
                </div>

                <div className="combo-card">
                  <h3>Combo Familia</h3>
                  <div className="price">R$ 199,90</div>
                  <ul className="combo-features">
                    <li>60 peças</li>
                    <li>6 Hots</li>
                    <li>3 Temakis</li>
                    <li>2 Refrigerantes 2L</li>
                    <li>4 Harumakis</li>
                  </ul>
                  <Button text="Pedir agora" />
                </div>
              </div>
            </div>
          </section>

          <section id="join-us" className="join-us-section py-xl">
            <div className="container">
              <h2 className="section-title">Mande sua mensagem</h2>
              <div className="join-us-form">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="email-input"
                />
                <textarea
                  placeholder="Sua mensagem"
                  className="message-input"
                  rows={4}
                />

                <Button text="Enviar" />
              </div>
            </div>
          </section>

          <div className="cta-button">
            <Button text="Fazer pedido agora" />
          </div>
        </div>
      </section>
    </>
  );
}
