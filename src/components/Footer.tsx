import Logo from "../assets/logo.svg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logo} alt="Katu Sushi" width={180} height={65} />
            <p>Sushi feito com paixão e tradição desde 2024</p>
          </div>
          
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#tutorial">Como Pedir</a></li>
              <li><a href="#combos">Combos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contato</h4>
            <p>📱 (11) 99999-9999</p>
            <p>📧 contato@katusushi.com.br</p>
            <p>📍 Rua do Sushi, 123 - São Paulo</p>
          </div>
          
          <div className="footer-hours">
            <h4>Horário de Funcionamento</h4>
            <p>Segunda a Sexta: 11h às 23h</p>
            <p>Sábado e Domingo: 11h às 00h</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Katu Sushi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
