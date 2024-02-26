import { useContext, useState, lazy } from "react";
import { Button, TextField } from "@mui/material";
import { Contexto } from "../Context/ContextProvider";
const Swal = lazy(() => import("sweetalert2"));
import { QRScanner } from "./QrScanner";
function Meter() {
  console.log(QRScanner);
  const { verProductoPorCodigoBarras, agregarProductos } = useContext(Contexto);
  const [CodigoBarras, setCodigoBarras] = useState("");
  const [cantidad, setCantidad] = useState(null);
  const [producto, setProducto] = useState({
    id: null,
    CodigoBarras: null,
    Nombre: null,
    Cantidad: null,
  });

  const handleScan = (data) => {
    setCodigoBarras(data);
    if (CodigoBarras !== "") {
      submitId();
    }
  };

  const submitId = async () => {
    const buscarProducto = await verProductoPorCodigoBarras(CodigoBarras);
    const data = buscarProducto.data;
    console.log(data);
    setProducto({
      id: data._id,
      CodigoBarras: data.CodigoBarras,
      Nombre: data.Nombre,
      Cantidad: data.Cantidad,
    });
  };

  const submitCantidad = async () => {
    const cantidadParaAgregar = cantidad;
    const CantidadParseada = { Cantidad: cantidadParaAgregar };
    Swal.fire({
      title: "¿Agregar mas existencias?",
      showDenyButton: true,
      confirmButtonText: "Continuar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const enviarCantidadNueva = agregarProductos(
          producto.id,
          CantidadParseada
        );
        window.location.href = "/inventario";
      }
    });
  };

  return (
    <div className="ml-5 mt-5">
      <h1>Agregar mas productos</h1>

      <div>
        <div>
          <h2>Codigo QR</h2>
          <QRScanner onScan={handleScan} />
          <div className="flex">
            <TextField
              label="Filled"
              variant="filled"
              type="text"
              value={CodigoBarras}
              name="id"
              id="id"
              onChange={(e) => setCodigoBarras(e.target.value)}
            />
            <div className="ml-3">
              {producto.Nombre && producto.Cantidad ? (
                <div>
                  <h2>
                    <b>Nombre</b>: {producto.Nombre}
                  </h2>
                  <h2>
                    <b>Cantidad Disponible</b>: {producto.Cantidad}
                  </h2>
                </div>
              ) : null}{" "}
            </div>
          </div>
          <Button
            disabled={CodigoBarras ? false : true}
            variant="contained"
            color="primary"
            onClick={submitId}
          >
            {CodigoBarras ? "Buscar" : "Escané un codigo"}
          </Button>
        </div>

        <div>
          <h2>Cantidad a agregar</h2>
          <TextField
            label="Filled"
            variant="filled"
            id="cantidad"
            name="cantidad"
            type="number"
            onChange={(e) => {
              setCantidad(e.target.value);
            }}
          />
          <h2>Unidad: </h2>
          {cantidad ? (
            <Button
              disabled={false}
              variant="contained"
              color="primary"
              onClick={submitCantidad}
            >
              Agregar
            </Button>
          ) : (
            <Button
              disabled={true}
              variant="contained"
              color="primary"
              onClick={submitCantidad}
            >
              Agregar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Meter;
