import axios from "./axiosCredentials";

const BaseUrlProductos = import.meta.env.VITE_BASEURLPRODUCTOS;
const BaseUrlUsuarios = import.meta.env.VITE_BASEURLUSUARIOS;
const BaseUrlLogs = import.meta.env.VITE_BASEURLLOGS;
export const VerTareas = async () => await axios.get(`${BaseUrlProductos}`);

export const CrearTarea = async (producto) =>
  await axios.post(`${BaseUrlProductos}`, producto);

export const BorrarTarea = async (id, usuario) => {
  await axios.post(`${BaseUrlProductos}/eliminar/${id}`, usuario);
};

export const ActualizarTarea = async (id, producto) =>
  await axios.put(`${BaseUrlProductos}/${id}`, producto);

export const VerProducto = async (id) => {
  return await axios.get(`${BaseUrlProductos}/` + id);
};

export const verProductoPorCodigoBarrasRequest = async (codigoBarras) => {
  return await axios.post(
    `${BaseUrlProductos}/verProductoPorCodigoBarras/${codigoBarras}`
  );
};

export const agregarProductosRequest = async (id, datos) => {
  return await axios.put(`${BaseUrlProductos}/aumentar/${id}`, datos);
};

export const retirarProductosRequest = async (id, datos) => {
  return await axios.put(`${BaseUrlProductos}/retirar/${id}`, datos);
};

export const verPendientesRequest = async () => {
  return await axios.post(`${BaseUrlProductos}/Pendientes`);
};

export const RegistrarUsuarioRequest = async (NuevoUsuario) =>
  await axios.post(`${BaseUrlUsuarios}register`, NuevoUsuario);

export const ComprobarUsuario = async (Usuario) =>
  await axios.post(`${BaseUrlUsuarios}login`, Usuario);

export const verificarToken = async (token) =>
  await axios.post(`${BaseUrlUsuarios}verificarToken`, token);

export const logout = async () => await axios.post(`${BaseUrlUsuarios}logout`);

export const eliminarUsuarioRequest = async (id) => {
  await axios.delete(`${BaseUrlUsuarios}deleteUser/${id}`);
};

export const verUsuariosRequest = async () => {
  return await axios.get(`${BaseUrlUsuarios}verAllUsers`);
};

export const verLogsRequest = async () => {
  return await axios.get(`${BaseUrlLogs}`);
};
