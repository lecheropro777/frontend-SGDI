import axios from "./axiosCredentials";

const BaseUrlProductos = import.meta.env.VITE_BASEURLPRODUCTOS;
const BaseUrlUsuarios = import.meta.env.VITE_BASEURLUSUARIOS;

export const VerTareas = async () => await axios.get(`${BaseUrlProductos}`);

export const CrearTarea = async (producto) =>
  await axios.post(`${BaseUrlProductos}`, producto);

export const BorrarTarea = async (id) =>
  await axios.delete(`${BaseUrlProductos}/${id}`);

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

export const agregarProductosRequest = async (id, Cantidad) => {
  return await axios.put(`${BaseUrlProductos}/aumentar/${id}`, Cantidad);
};

export const retirarProductosRequest = async (id, Cantidad) => {
  return await axios.put(`${BaseUrlProductos}/retirar/${id}`, Cantidad);
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
