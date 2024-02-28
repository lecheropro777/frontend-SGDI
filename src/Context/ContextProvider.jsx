import { createContext, useEffect, useState } from "react";
import {
  VerTareas,
  ActualizarTarea,
  BorrarTarea,
  CrearTarea,
  VerProducto,
  verProductoPorCodigoBarrasRequest,
  agregarProductosRequest,
  retirarProductosRequest,
  verPendientesRequest,
  verLogsRequest,
} from "../api/Crear.api";
import Swal from "sweetalert2";

export const Contexto = createContext();

export const InventarioProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [pendientes, setPendientes] = useState([]);

  const VerObjetos = async () => {
    const datos = await VerTareas();
    setData(datos.data);
  };

  const VerObjeto = async (id) => {
    try {
      return await VerProducto(id);
    } catch (error) {
      console.error(error);
    }
  };

  const CrearObjeto = async (values) => {
    Swal.fire({
      title: "Crear el producto?",
      showDenyButton: true,

      confirmButtonText: "Guardar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        CrearTarea(values);
        setData([...data, values]);
        window.location.href = "/Inventario";
      }
    });
  };

  const EliminarObjetos = async (id, usuario) => {
    Swal.fire({
      title: "Desea eliminar?",
      text: "Nose podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        BorrarTarea(id, usuario);
        setData(data.filter((item) => item._id !== id));
        window.location.href = "/inventario";
      }
    });
  };

  const ActualizarObjeto = async (id, newFields) => {
    Swal.fire({
      title: "Guardar los cambios?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        ActualizarTarea(id, newFields);
        window.location.href = "/Inventario";
      }
    });
  };

  const verProductoPorCodigoBarras = async (CodigoBarras) => {
    const respuesta = await verProductoPorCodigoBarrasRequest(CodigoBarras);
    if (respuesta) {
      return respuesta;
    }
    return;
  };

  const agregarProductos = async (id, datos) => {
    const respuesta = await agregarProductosRequest(id, datos);
    if (respuesta) {
      return respuesta;
    }
    return;
  };
  const retirarProductos = async (id, datos) => {
    const respuesta = await retirarProductosRequest(id, datos);
    if (respuesta) {
      return respuesta;
    }
    return;
  };

  const verPendientes = async () => {
    const pendientesResultados = await verPendientesRequest();
    setPendientes(pendientesResultados.data);
  };

  const verLogs = async () => {
    const logs = await verLogsRequest();
    return logs;
  };

  useEffect(() => {
    VerObjetos();
    verPendientes();
  }, []);

  return (
    <Contexto.Provider
      value={{
        setData,
        data,
        pendientes,
        InventarioProvider,
        CrearObjeto,
        EliminarObjetos,
        VerObjetos,
        ActualizarObjeto,
        VerObjeto,
        verProductoPorCodigoBarras,
        agregarProductos,
        retirarProductos,
        verLogs,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
