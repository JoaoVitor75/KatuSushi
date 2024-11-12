import Button from "./button";

export function Combos() {
  return (
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
  );
}
