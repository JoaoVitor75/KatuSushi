import { useState } from "react";
import Button from "./button";
import "../styles/contact.css";
import { useEmailRequest } from "../pages/index";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { mutateAsync, isLoading } = useEmailRequest();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      toMail: email,
      content: message,
    };

    try {
      await mutateAsync(emailData);
      setEmail("");
      setMessage("");
      setSuccessMessage("Email enviado com sucesso!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);

    } catch (error) {
      setSuccessMessage("Erro ao enviar email. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <section id="join-us" className="join-us-section py-xl">
      <div className="container">
        <h2 className="section-title">Mande sua mensagem</h2>
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="join-us-form">
          <input
            type="email"
            placeholder="Seu email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Sua mensagem"
            className="message-input"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button 
            text={isLoading ? "Enviando..." : "Enviar"} 
            type="submit"
            disabled={isLoading}
          />
        </form>
      </div>
    </section>
  );
}