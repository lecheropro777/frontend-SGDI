import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <div className="text-center text-4xl pt-10">Pagina no encontrada</div>
      <div className="text-center py-10">
        <Link
          className="bg-blue-700 text-white text-2xl  rounded-md py-2 px-2"
          to="/"
        >
          Iniciar sesion
        </Link>
      </div>
      <div className="text-center py-10">
        <Link
          className="bg-blue-700 text-white text-2xl  rounded-md py-2 px-2"
          to="/Inventario"
        >
          Volver
        </Link>
      </div>
    </>
  );
}
