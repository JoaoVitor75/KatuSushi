import Logo from "../assets/logo.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "./button";

type HeaderSectionProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: (value: boolean) => void;
}

export function Header({ showMobileMenu, setShowMobileMenu }: HeaderSectionProps) {
  return (
    <header className="container py-sm">
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Katu Sushi" width={220} height={80} />

        <div className="desktop-only">
          <ul className="flex gap-1">
            <li><a href="#">Home</a></li>
            <li><a href="#tutorial">Como pedir</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="desktop-only">
          <div className="flex items-center">
            <a className="reverse-color ml-lg" href="#">Login</a>
            <Button text="Cadastre-se" />
          </div>
        </div>

        <div className="mobile-menu">
          {showMobileMenu ? (
            <div className="mobile-menu-content">
              <div className="container flex">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#tutorial">Como pedir</a></li>
                  <li><a href="#contact">Contato</a></li>
                  <li><a className="reverse-color" href="#">Login</a></li>
                </ul>
                <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                  <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                </span>
              </div>
            </div>
          ) : (
            <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
              <img src={Menu} alt="ícone menu" width={24} height={24} />
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
