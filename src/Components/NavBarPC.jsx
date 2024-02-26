import React from "react";
import { useNavigate } from "react-router-dom";

function NavBarPC(props) {
  const rol = props.data;
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-zinc-800 grid text-left pt-2 pb-3 sm:grid-cols-1 md:grid-flow-row lg:flex">
        <button
          onClick={() => {
            navigate("/Inventario");
          }}
          className=" mx-4 text-white hover:text-slate-400"
        >
          Inventario
        </button>
        <button
          onClick={() => {
            navigate("/Meter-productos");
          }}
          className=" mx-4 text-white hover:text-slate-400"
        >
          Agregar productos
        </button>
        <button
          onClick={() => {
            navigate("/Sacar-productos");
          }}
          className=" mx-4 text-white hover:text-slate-400"
        >
          Retirar productos
        </button>
        <button
          onClick={() => {
            navigate("/Pendientes");
          }}
          className="mx-4 text-white hover:text-slate-400"
        >
          Pendientes
        </button>
        {rol.Rol === "admin" ? (
          <button
            onClick={() => {
              navigate("/AdministrarUsuarios");
            }}
            className="mx-4 text-white hover:text-slate-400"
          >
            Usuarios
          </button>
        ) : (
          false
        )}

        {rol.Rol === "gerente" || rol.Rol === "admin" ? (
          <button
            onClick={() => {
              navigate("/Registro");
            }}
            className="mx-4 text-white hover:text-slate-400"
          >
            Nuevo Usuario
          </button>
        ) : (
          false
        )}
        <button
          className=" mx-4 text-red-600 hover:text-slate-400 font-black"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          <h1>Salir </h1>
        </button>
      </div>
    </div>
  );
}

export default NavBarPC;
