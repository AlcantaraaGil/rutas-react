import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

    // let {nombre="Gilberto",apellido="Alcántara"}=useParams();

    const {nombre,apellido}=useParams();

  return (

    <div>
        {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
        {nombre && <h1>Pagina de persona: {nombre} {apellido}</h1>}
        <p>Esta es la pagina de persona</p>

        <form>
          <input type='text' name='nombre' />
          <input type='text' name='apellido' />
          <input type='submit' name='enviar' value='enviar' />
        </form>

    </div>
  )
}
