import Foods from "../assets/images/foods.png";
import Location from "../assets/images/location.png";
import Tracker from "../assets/images/trackOrder.png";

export function Tutorial() {
    return (
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
        </div>
      </section>
    );
  }