import FormLogin from "../../components/FormLogin";
import Img from "../../images/LogoTropa.png";
import Img2 from "../../images/Fundopreto.png";
import Img3 from "../../images/image 6.svg";
import imgOlho from "../../images/olhinho.png";
import "./style.css";

function Login() {
  return (
    <main>
      <section>
        <div className="div-form">
          <img src={Img} alt="" className="img-logo" />
          <FormLogin />
        </div>
        <div className="div-aside">
          <img src={Img2} alt="" className="img-fundo" />
          <img src={Img3} alt="" className="img-pc" />
          <img src={imgOlho} alt="" className="img-olho" />
        </div>
      </section>
    </main>
  );
}

export default Login;
