import React, { useContext, useEffect, useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { Contexto } from "../Context/ContextProvider";
import { Button, TextField } from "@mui/material";
const CustomizedTables = lazy(() => import("./Tabla"));

function Inventario() {


  
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const { data } = useContext(Contexto);
  const showData = async () => {
    setProductos(data);
  };
  useEffect(() => {
    showData();
  }, []);
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  const results = !search
    ? productos
    : productos.filter((producto) => producto.Nombre.includes(search));

  return (
    <div>
      <div>
        <div className="flex pt-4 pb-4">
          <div className="pr-5" style={{ width: "300px", textAlign: "start" }}>
            <TextField
              autoComplete="off"
              id="filled-basic"
              label="Buscar"
              variant="filled"
              value={search}
              onChange={searcher}
              type="text"
            />
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              navigate(`/NuevoProducto`);
            }}
          >
            Nuevo Producto
          </Button>
        </div>
        <div>
          <CustomizedTables data={results} />
        </div>
      </div>
    </div>
  );
}

export default Inventario;
