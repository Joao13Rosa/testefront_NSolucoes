import "./style.css";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const Navigate = useNavigate();

  return (
    <>
      <form action="">
        <h2>
          Bem Vindo ao <span>Painel</span>
        </h2>
        <input type="email" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <button onClick={() => Navigate("/main")}>Acessar</button>
      </form>
    </>
  );
}

export default FormLogin;
