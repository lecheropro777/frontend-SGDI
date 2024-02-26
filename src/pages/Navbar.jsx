import React, { useContext, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthProvider";
const NavBarPC = lazy(() => import("../Components/NavBarPC"));
const NavBarCelulares = lazy(() => import("../Components/NavBarCelulares"));

export function Navbar() {
  const { rol } = useContext(AuthContext);
  const navigate = useNavigate();
  const mql = window.matchMedia("(min-width: 1024px)");
  let mobileView = mql.matches;
  return (
    <>
      <div>
        {mobileView ? (
          <Suspense>
            <NavBarPC data={rol} />
          </Suspense>
        ) : (
          <Suspense>
            <NavBarCelulares data={rol}/>
          </Suspense>
        )}
      </div>
    </>
  );
}
