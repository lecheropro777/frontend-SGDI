import React from "react";
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function TablaLogs(props) {
  const logs = props.data;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Quien</StyledTableCell>
              <StyledTableCell align="left">Que hizo</StyledTableCell>
              <StyledTableCell align="left">Descripcion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <StyledTableRow key={log._id}>
                <StyledTableCell component="th" scope="row">{log.Usuario}</StyledTableCell>
                <StyledTableCell align="left">{log.Accion}</StyledTableCell>
                <StyledTableCell align="left">{log.Descripcion}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
