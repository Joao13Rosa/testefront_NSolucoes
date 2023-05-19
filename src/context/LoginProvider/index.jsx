import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useEffect, useState } from "react";
import { schema } from "../../validator";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@sgs:token");

      if (token) {
        api
          .get(`/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            setUser(data.user);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      setLoading(false);
    };
    loadUser();
  }, [setLoading, setUser]);

  const navigate = useNavigate();

  const signIn = async (data) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@token", res.data.token);
        toast.success("Login realizado com sucesso");
        navigate("/main", { replace: true });
      })
      .catch((err) => {
        toast.error("Email ou senha incorretos ou não cadastrados");
        console.log(err);
      });
  };

  return (
    <LoginContext.Provider
      value={{
        signIn,
        register,
        errors,
        handleSubmit,
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
