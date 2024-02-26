import React from 'react'
import { Link } from 'react-router-dom'

export function Provedores() {
  return (
    <div>
        <div className="grid grid-cols-3 text-center py-20">
        <Link
          to="/VerInventarioZona4"
          className="bg-zinc-800  text-white py-5 mx-20"
        >
          Proveedores 1
        </Link>
        <Link
          to="/VerInventarioZona5"
          className="bg-zinc-800  text-white py-5 mx-20"
        >
          Proveedores 2
        </Link>
        <Link
          to="/VerInventarioZona6"
          className="bg-zinc-800  text-white py-5 mx-20"
        >
          Proveedores 3
        </Link>
      </div>
      <div className="grid grid-cols-3 text-center py-20">
        <Link
          to="/VerInventarioZona4"
          className="bg-zinc-800  text-white py-5 mx-20"
        >
          Proveedores 4
        </Link>
        <Link
          to="/VerInventarioZona5"
          className="bg-zinc-800  text-white py-5 mx-20"
        >
          Proveedores 5
        </Link>
        <Link
          to="/VerInventarioZona6"
          className="bg-zinc-800  text-white py-5 mx-20"
        >
          Proveedores 6
        </Link>
      </div>
    </div>
  )
}
