import "./style.css";
import Logo from "../../images/LogoTropa.png";
import { list } from "../../database";

function Main() {
  return (
    <main className="main-main">
      <aside>
        <img src={Logo} alt="" className="img-logo" />
        <div className="div-button">
          <p>Início</p>
        </div>
        <div className="div-button">
          <p>Contatos</p>
        </div>
        <div className="div-button">
          <p>Relatórios</p>
        </div>
        <div className="div-button">
          <p>Contatos</p>
        </div>
        <div className="div-button">
          <p>Contatos</p>
        </div>
        <div className="div-button">
          <p>Contatos</p>
        </div>
      </aside>
      <section className="section-main">
        <h1>
          Olá <span className="span-user">Usuário</span>
        </h1>
        <ul>
          {list.map((elem, index) => (
            <li key={index}>
              <img src={elem.img} alt="" className="img-list" />
              <h2 className="h2-title">{elem.title}</h2>
              <p className="p-description">{elem.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
