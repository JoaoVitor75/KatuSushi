import Button from "./button";

export function Contact() {
  return (
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
  );
}
