  import HeroRectangleOne from "../assets/images/rectangleOne.png";
  import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
  import Button from "./button";

  export function Hero() {
    return (
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
    );
  }