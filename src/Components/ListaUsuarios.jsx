import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonIcon from "@mui/icons-material/Person";

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
export function ListaUsuarios(props) {
  const usuarios = props.data;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left"></StyledTableCell>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="left">Cantidad</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((usuario) => (
            <StyledTableRow key={usuario.nombre}>
              <StyledTableCell component="th" scope="row">
                <PersonIcon />
              </StyledTableCell>
              <StyledTableCell align="left">{usuario.nombre}</StyledTableCell>
              <StyledTableCell align="left">{usuario.Rol}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
