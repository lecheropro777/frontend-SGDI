import React, { useContext, useState } from "react";
import { Formik, Form } from "formik";
import { AuthContext } from "../Context/AuthProvider";
import { Button, MenuItem, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function Registro() {
  const { RegistrarUsuario } = useContext(AuthContext);
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    Usuario: "",
    Contrasena: "",
    Rol: "",
  });
  return (
    <div className="text-lg h-screen text-black  px-10 py-10">
      <Formik
        initialValues={datos}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          const guardar = await RegistrarUsuario(values);
          console.log(guardar);
          if (guardar.data) {
            Swal.fire({
              icon: "success",
              title: "Usuario creado",
            }).then(() => {
              navigate("/inventario");
            });
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <TextField
                autoComplete="off"
                name="Usuario"
                values={values.Usuario}
                onChange={handleChange}
                label="Usuario"
                variant="standard"
              />
            </div>
            <div>
              <TextField
                autoComplete="off"
                name="Contrasena"
                type="password"
                values={values.Contrasena}
                onChange={handleChange}
                label="Contrasena"
                variant="standard"
              />
            </div>

            <div>
              <TextField
                autoComplete="off"
                name="Rol"
                type="select"
                values={values.Rol}
                onChange={handleChange}
                label="Rol"
                variant="standard"
              >
                <MenuItem value="gerente">gerente</MenuItem>
              </TextField>
            </div>

            <div className="py-5">
              <Button variant="contained" color="success" type="submit">
                Crear usuario
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
