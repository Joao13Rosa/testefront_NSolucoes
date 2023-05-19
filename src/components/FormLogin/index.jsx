import { useContext } from "react";

import { LoginContext } from "../../context/LoginProvider";

const FormLogin = () => {
  const { signIn, register, errors, handleSubmit } = useContext(LoginContext);

  return (
    <>
      <form onSubmit={handleSubmit(signIn)}>
        <h1>Entrar</h1>
        <div>
          <input
            label={"E-mail"}
            register={register}
            id={"email"}
            error={errors?.email}
            placeholder={"Digite seu E-mail"}
            type={"text"}
          />
          <input
            label={"Senha"}
            register={register}
            id={"password"}
            error={errors?.password}
            placeholder={"Digite sua senha"}
            type={"password"}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default FormLogin;
