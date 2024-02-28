import React, { useContext, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Contexto } from "../Context/ContextProvider.jsx";
import { Button, TextField } from "@mui/material";
import { AuthContext } from "../Context/AuthProvider.jsx";

export function NuevoProducto() {
  const{rol,usuario}=useContext(AuthContext)
  const navigate = useNavigate();
  const { CrearObjeto, VerObjeto, ActualizarObjeto } = useContext(Contexto);
  const [data, setData] = useState({
    Nombre: "",
    Cantidad: "",
    CantidadMinima: "",
    Unidad: "",
    Proveedor: "",
    Usuario:usuario.usuario
  });
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      const loadTask = async () => {
        const respuesta = await VerObjeto(params.id);
        const data = respuesta.data;
        setData({
          Nombre: data.Nombre,
          Cantidad: data.Cantidad,
          CantidadMinima: data.CantidadMinima,
          Unidad: data.Unidad,
          Proveedor: data.Proveedor,
          Usuario:usuario.usuario
        });
      };
      loadTask();
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={data}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log(values)
            await ActualizarObjeto(params.id, values);
          } else {
            await CrearObjeto(values);
          }
          
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <div>
            <header className="bg-slate-400 py-5">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate("/inventario");
                }}
              >
                Volver
              </Button>
            </header>
            <div className="mx-32 h-screen">
              <Form onSubmit={handleSubmit}>
                <div>
                  <TextField
                    className="border-b-4 border-zinc-900 hover:bg-slate-300 pt-5"
                    placeholder="Nombre"
                    autoComplete="off"
                    name="Nombre"
                    
                    value={values.Nombre}
                    onChange={handleChange}
                    label="Nombre"
                    variant="standard"
                  />
                </div>

                <div>
                  <TextField
                    className="border-b-4 border-zinc-900 hover:bg-slate-300 pt-5"
                    placeholder="Cantidad"
                    type="number"
                    autoComplete="off"
                    name="Cantidad"
                    
                    value={values.Cantidad}
                    onChange={handleChange}
                    label="Cantidad"
                    variant="standard"
                  />
                </div>

                <div>
                  <TextField
                  type="number"
                    // className="border-b-4 border-zinc-900 hover:bg-slate-300 pt-5"
                    placeholder="Cantidad Minima"
                    autoComplete="off"
                    name="CantidadMinima"
                    
                    value={values.CantidadMinima}
                    onChange={handleChange}
                    label="Cantidad Minima"
                    variant="standard"
                  />
                </div>
                <div>
                  <TextField
                    className="border-b-4 border-zinc-900 hover:bg-slate-300 pt-5"
                    placeholder="Unidad"
                    autoComplete="off"
                    name="Unidad"
                    
                    value={values.Unidad}
                    onChange={handleChange}
                    label="Unidad"
                    variant="standard"
                  />
                </div>

                <div>
                  <TextField
                    className="border-b-4 border-zinc-900 hover:bg-slate-300 pt-5"
                    placeholder="Proveedor"
                    autoComplete="off"
                    name="Proveedor"
                    
                    value={values.Proveedor}
                    onChange={handleChange}
                    label="Proveedor"
                    variant="standard"
                  />
                </div>

                <div className="py-5">
                  <Button
                    variant="contained"
                    color={params.id ? "info" : "success"}
                    type="submit"
                  >
                    {params.id ? "Editar" : "Crear"}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
