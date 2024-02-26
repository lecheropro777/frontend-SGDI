import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider.jsx";
import { InventarioProvider } from "./Context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <InventarioProvider>
        <App />
      </InventarioProvider>
    </AuthProvider>
  </BrowserRouter>
);
