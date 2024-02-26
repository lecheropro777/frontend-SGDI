import React, { useContext, useEffect, useState } from "react";
import { ListaUsuarios } from "../Components/ListaUsuarios";
import { AuthContext } from "../Context/AuthProvider";
export function AdministrarUsuarios() {
  const { verUsuarios } = useContext(AuthContext);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const ver = async () => {
      try {
        const respuesta = await verUsuarios();
        setUsuarios(respuesta.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    ver();
  }, []);

  return (
    <div>
      <ListaUsuarios data={usuarios} />
    </div>
  );
}
