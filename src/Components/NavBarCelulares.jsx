import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
function NavBarCelulares(props) {
  const rol = props.data;
  const navigate = useNavigate();
  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(39,39,42)",
                width: "100%",
                fontSize: "20px",
              }}
              {...bindTrigger(popupState)}
            >
              Menu
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate("/Inventario");
                }}
              >
                Inventario
              </MenuItem>
              <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate("/Meter-productos");
                }}
              >
                Agregar productos
              </MenuItem>
              <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate("/Sacar-productos");
                }}
              >
                Retirar productos
              </MenuItem>
              <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate("/Pendientes");
                }}
              >
                Pendientes
              </MenuItem>
              {rol.Rol === "admin" ? (
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    navigate("/AdministrarUsuarios");
                  }}
                >
                  Usuarios
                </MenuItem>
              ) : (
                false
              )}
              {rol.Rol === "admin" ? (
                <>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    navigate("/Registro");
                  }}
                >
                  Nuevo Usuario
                </MenuItem>
                <MenuItem
                onClick={() => {
                  popupState.close();
                  navigate("/Registro");
                }}
              >
                Logs
              </MenuItem>
              </>
              ) : (
                false
              )}
              <MenuItem
                className="text-red-500"
                onClick={() => {
                  popupState.close();
                  localStorage.removeItem("token");
                  window.location.href = "/";
                }}
              >
                Salir
              </MenuItem>
            </Menu>
          </div>
        )}
      </PopupState>
    </div>
  );
}

export default NavBarCelulares;
