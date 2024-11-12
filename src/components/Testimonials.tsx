import ClienteUm from "../assets/images/cliente1.jpg";
import ClienteDois from "../assets/images/cliente2.png";
import ClienteTres from "../assets/images/cliente3.jpg";


export function Testimonials() {
    return (
        <section id="testimonials" className="testimonials-section py-xl">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-track">
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
    );
  }
  