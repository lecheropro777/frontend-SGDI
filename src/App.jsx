import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NuevoProducto } from "./pages/NuevoProducto";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { NotFound } from "./pages/NotFound";
import { RutasProtejidas } from "./pages/RutasProtejidas";
import { Navbar } from "./pages/Navbar";
import { Pendientes } from "./pages/Pendientes";
import { AuthContext } from "./Context/AuthProvider";
import { useContext, lazy, Suspense } from "react";
import { AdministrarUsuarios } from "./pages/AdministrarUsuarios";
import { Logs } from "./pages/logs";
const Inventario = lazy(() => import("./Zona1/Inventario"));
const Meter = lazy(() => import("./Components/Meter"));
const Retirar = lazy(() => import("./Components/Retirar"));

function App() {
  const { rol, usuario } = useContext(AuthContext);
  return (
    <>
      {usuario ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route element={<RutasProtejidas />}>
          {rol.Rol == "almacenista" ||
          rol.Rol === "gerente" ||
          rol.Rol === "admin" ? (
            <>
              <Route
                path="/Inventario"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Inventario />
                  </Suspense>
                }
              />
              <Route
                path="/Pendientes"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Pendientes />
                  </Suspense>
                }
              />
              <Route
                path="/Meter-productos"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Meter />
                  </Suspense>
                }
              />
              <Route
                path="/Sacar-productos"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Retirar />
                  </Suspense>
                }
              />
              <Route
                path="/NuevoProducto/:id"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <NuevoProducto />
                  </Suspense>
                }
              />
              <Route
                path="/NuevoProducto"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <NuevoProducto />
                  </Suspense>
                }
              />
            </>
          ) : (
            false
          )}

          {rol.Rol == "gerente" || rol.Rol === "admin" ? (
            <>
              <Route path="/Registro" element={<Registro />} />
              {/* <Route path="/logs" element={<Logs />} /> */}
            </>
          ) : (
            false
          )}

          {rol.Rol === "admin" ? (
            <>
              <Route
                path="/AdministrarUsuarios"
                element={<AdministrarUsuarios />}
              />
              <Route
                path="/Logs"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Logs />
                  </Suspense>
                }
              />
            </>
          ) : (
            false
          )}


        </Route>
      </Routes>
    </>
  );
}

export default App;
