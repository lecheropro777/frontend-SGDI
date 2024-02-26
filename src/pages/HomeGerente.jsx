import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/DiagnoconsLogo.png";
import { InventarioZonas } from "./InventarioZonas";
import { Provedores } from "./Provedores";
import { Registro } from "./Registro";
import { logout } from "../api/Crear.api";

export function HomeGerente() {
  const [mostrarInventarioZonas, setMostrarInventarioZonas] = useState(false);
  const RenderInventarioZonas = () => {
    setMostrarInventarioZonas(!mostrarInventarioZonas);
    setMostrarProvedores(false);
    setMostrarCrearUsuarios(false);
  };

  const [mostrarProvedores, setMostrarProvedores] = useState(false);
  const RenderProvedores = () => {
    setMostrarProvedores(!mostrarProvedores);
    setMostrarInventarioZonas(false);
    setMostrarCrearUsuarios(false);
  };
  const [mostrarCrearUsuarios, setMostrarCrearUsuarios] = useState(false);
  const RenderCrearUsuarios = () => {
    setMostrarCrearUsuarios(!mostrarCrearUsuarios);
    setMostrarInventarioZonas(false);
    setMostrarProvedores(false);
  };

  const RenderCrearUsuario = () => {};
  return (
    <div className=" h-screen">
      <header>
        <div className="bg-zinc-800 flex justify-between  ">
          <div className="">
            <img className="w-16" src={imagen} alt={imagen}></img>
            <div>
              <button
                className={
                  mostrarInventarioZonas
                  ? "text-green-500 mx-3 font-black text-2xl"
                  : "text-white mx-3 hover:text-green-300 hover:text-lg"
                }
                onClick={RenderInventarioZonas}
              >
                Inventario
              </button>

              <button
                className={
                  mostrarProvedores ?  "text-green-500 mx-3 font-black text-2xl"
                  : "text-white mx-3 hover:text-green-300 hover:text-lg"
                }
                onClick={RenderProvedores}
              >
                Proveedores
              </button>
              <button
                className={
                  mostrarCrearUsuarios
                    ? "text-green-500 mx-3 font-black text-2xl"
                    : "text-white mx-3 hover:text-green-300 hover:text-lg"
                }
                onClick={RenderCrearUsuarios}
              >
                Crear usuarios
              </button>
            </div>
          </div>
          <div>
            <button
              className="text-white hover:text-red-600 hover:font-black hover:text-xl"
              onClick={() => {
                logout()
                window.location.href="/";
              }}
            >
              Cerrar sesion
            </button>
          </div>
        </div>
      </header>
      {mostrarInventarioZonas && <InventarioZonas />}
      {mostrarProvedores && <Provedores />}
      {mostrarCrearUsuarios && <Registro />}
    </div>
  );
}
