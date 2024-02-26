import React, { useContext } from "react";
import { Contexto } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";

export function TaskCard({ item }) {
  const { EliminarObjetos } = useContext(Contexto);
  const navigate = useNavigate();
  return (
    <div
      key={item.id}
      className="border-2  grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 font-black text-center sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <h1>{item.Nombre}</h1>
      <h1>{item.Cantidad}</h1>
      <h1>{item.Proveedor}</h1>
      <div className="bg-zinc-50">
        <button
          onClick={() => EliminarObjetos(item._id)}
          className="bg-red-600 rounded-md  mx-1 text-white"
        >
          Eliminar
          
        </button>
        <button
          onClick={() => navigate(`/NuevoProducto/${item._id}`)}
          className="bg-blue-500 rounded-md mx-1 text-white"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
