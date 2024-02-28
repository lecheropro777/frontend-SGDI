import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

export function Login() {
  const { LoginUser } = useContext(AuthContext);
  const [datos] = useState({
    Usuario: "",
    Contrasena: "",
  });
  return (
    <div>
      <Formik
        initialValues={datos}
        enableReinitialize={true}
        onSubmit={async (values) => {
          if (!values.Usuario) {
            Swal.fire({
              icon: "error",
              title: "Introduzca su usuario",
              
            });
            return;
          }
          if (!values.Contrasena) {
            Swal.fire({
              icon: "error",
              title: "Introduzca su contraseña",
              
            });
            return;
          } else {
            await LoginUser(values);
          }
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <div className="bg-slate-950 h-screen text-white flex justify-center items-center">
            <div className="bg-slate-800 max-w-md w-full flex justify-center items-center py-10 rounded-md">
              <Form onSubmit={handleSubmit}>
                <h1>Usuario</h1>
                <Field
                  type="text"
                  name="Usuario"
                  value={values.Usuario}
                  onChange={handleChange}
                  className="border-2 text-black font-mono"
                ></Field>
                <h1>Password</h1>
                <Field
                  type="password"
                  name="Contrasena"
                  value={values.Contrasena}
                  onChange={handleChange}
                  className="border-2 text-black font-mono"
                ></Field>
                <div className="py-4 text-center">
                  <Button type="submit" variant="contained" size="medium">
                    Iniciar
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
