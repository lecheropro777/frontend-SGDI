import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

export function RutasProtejidas() {
  const { cargando , usuario, isAuthenticated } = useContext(AuthContext);
  if(cargando) return <h1>Cargando...</h1>
  if (!cargando && !isAuthenticated){
    return <Navigate to="/" replace />;
  } 
  return <Outlet />;
}
