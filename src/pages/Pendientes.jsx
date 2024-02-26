import React, { useContext } from "react";
import { Contexto } from "../Context/ContextProvider";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function Pendientes() {
  const { pendientes, warningNotification } = useContext(Contexto);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="left">Cantidad</StyledTableCell>
              <StyledTableCell align="left">Cantidad Minima</StyledTableCell>
              <StyledTableCell align="left">Unidad</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendientes.length > 0 ? (
              pendientes.map((row) => (
                <StyledTableRow key={row.CodigoBarras}>
                  <StyledTableCell component="th" scope="row"></StyledTableCell>
                  <StyledTableCell align="left">{row.Nombre}</StyledTableCell>
                  <StyledTableCell align="left">{row.Cantidad}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.CantidadMinima}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.Unidad}</StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow><StyledTableCell>No hay pendientes</StyledTableCell></StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
