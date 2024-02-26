import React, { createContext, useEffect, useState } from "react";
import {
  ComprobarUsuario,
  RegistrarUsuarioRequest,
  eliminarUsuarioRequest,
  verUsuariosRequest,
  verificarToken,
} from "../api/Crear.api";
// import Cookies from "js-cookie";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [rol, setRol] = useState({ Rol: null });
  const [usuario, setUsuario] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cargando, setCargando] = useState(true);

  const RegistrarUsuario = async (NuevoUsuario) => {
    const registrar = await RegistrarUsuarioRequest(NuevoUsuario);
    console.log(registrar);
    if (registrar) {
      return registrar;
    } else if (registrar.response.status) {
      return;
    } else {
      return;
    }
  };

  const LoginUser = async (usuarioVerificacion) => {
    const verificar = await ComprobarUsuario(usuarioVerificacion);
    if (verificar.data.token) {
      localStorage.setItem("token", verificar.data.token);
      setIsAuthenticated(true);
      setUsuario(verificar.data);
    }
    if (verificar.data) {
      Swal.fire({
        title: "Sesión iniciada",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Entrar",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/Inventario";
        }
      });
    } else if (!verificar.data) {
      Swal.fire({
        icon: "error",
        title: "Datos Incorrectos",
      }).then(() => {
        window.location.href = "/";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Algo salio mal",
      }).then(() => {
        window.location.href = "/";
      });
    }
  };

  const checkLogin = async () => {
    const token = localStorage.getItem("token");
    const cookies = { token: token };
    if (!cookies) {
      setIsAuthenticated(false);
      setCargando(false);
      return;
    }
    try {
      const res = await verificarToken(cookies);
      if (!res.data) {
        localStorage.removeItem("token");
        return setIsAuthenticated(false);
      }
      // console.log(res.data)
      setRol({ Rol: res.data.rol });
      // console.log(rol)
      setIsAuthenticated(true);
      setUsuario(res.data);
      setCargando(false);
      return;
    } catch (error) {
      setIsAuthenticated(false);
      setCargando(false);
    }
  };

  const verUsuarios = async () => {
    const usuariosEncontrados = await verUsuariosRequest();
    if (!usuariosEncontrados) {
      return;
    }
    return usuariosEncontrados;
  };

  const eliminarUsuario = async (id) => {
    if (!id) {
      return;
    }
    const eliminar = await eliminarUsuarioRequest(id);
    return
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        rol,
        LoginUser,
        usuario,
        RegistrarUsuario,
        isAuthenticated,
        cargando,
        verUsuarios,
        eliminarUsuario
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
