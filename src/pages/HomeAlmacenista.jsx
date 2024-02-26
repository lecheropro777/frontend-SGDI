import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import imagen from "../assets/DiagnoconsLogo.png";
import{InventarioZona1} from "../Zona1/Inventario "
import { logout } from "../api/Crear.api";
import { AuthContext } from "../Context/AuthProvider";

export function HomeAlmacenista() {
  return (
    <div className=" h-screen">
      <header className="bg-zinc-800 flex justify-between">
        <div>
          <div>
            <img className="w-16 mx-4" src={imagen} alt={imagen}></img>
          </div>
          <div>
            <Link
              className="text-white mx-3 hover:text-green-300 hover:text-lg"
              to="/Inventario"
            >
              Inventario
            </Link>
            <Link
              className="text-white mx-3 hover:text-green-300 hover:text-lg"
              
              to="/Provedores"
            >
              Provedores
            </Link>
            <Link
              className= "text-white mx-3 hover:text-green-300 hover:text-lg"
              to="/Registro"
            >
              Registro
            </Link>
          </div>
        </div>

        <div>
          <button
            className="text-white hover:text-red-600 hover:font-black hover:text-xl"
            onClick={() => {
              logout();
              window.location.href = "/";
            }}
          >
            Cerrar sesion
          </button>
        </div>
      </header>
      <div>
        
      </div>
    </div>
  );
}
