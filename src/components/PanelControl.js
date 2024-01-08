import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>
        <p>Elige alguna de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/crear-articulos'>Crear articulos</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/gestion-usuarios'>Gestion de usuarios</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
                </li>

            </ul>
        </nav>

        <div>
            {/* quiero cargar aqui los componentes de las subrutas */}
            <Outlet/>
        </div>


    </div>
  )
}
