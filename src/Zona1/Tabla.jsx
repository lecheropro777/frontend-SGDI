import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import QRCode from "qrcode.react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Contexto } from "../Context/ContextProvider";
import { jsPDF } from "jspdf";
import { AuthContext } from "../Context/AuthProvider";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Tabla(props) {
  const { EliminarObjetos } = useContext(Contexto);
  const {usuario}=useContext(AuthContext)
  const rows = props.data;
  const navigate = useNavigate();

  const handleDownload = (Nombre) => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [29, 90],
    });
    const base64Image = document.getElementById(`qrcode${Nombre}`).toDataURL();

    pdf.addImage(base64Image, "png", 4, 4, 25, 20);

    pdf.setFontSize(9);
    const text = Nombre;
    const textWidth = pdf.getStringUnitWidth(text) * pdf.internal.getFontSize();
    const x = 33;
    const y = pdf.internal.pageSize.height / 2;
    pdf.text(text, x, y);
    pdf.save(`${Nombre}.pdf`);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">QR</StyledTableCell>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="left">Cantidad</StyledTableCell>
            <StyledTableCell align="left">Minimo</StyledTableCell>
            <StyledTableCell align="left">Unidad</StyledTableCell>
            <StyledTableCell align="left">Proveedor</StyledTableCell>
            <StyledTableCell align="left">Accion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.CodigoBarras}>
              <StyledTableCell component="th" scope="row">
                <QRCode
                  onClick={() => handleDownload(row.Nombre)}
                  id={`qrcode${row.Nombre}`}
                  value={row.CodigoBarras}
                />
              </StyledTableCell>
              <StyledTableCell align="left">{row.Nombre}</StyledTableCell>
              <StyledTableCell align="left">{row.Cantidad}</StyledTableCell>
              <StyledTableCell align="left">
                {row.CantidadMinima}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Unidad}</StyledTableCell>
              <StyledTableCell align="left">{row.Proveedor}</StyledTableCell>
              <StyledTableCell align="left">
                <div>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate(`/NuevoProducto/${row._id}`);
                    }}
                  >
                    Editar
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      EliminarObjetos(row._id,usuario);
                    }}
                  >
                    Eliminar
                  </Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tabla;
