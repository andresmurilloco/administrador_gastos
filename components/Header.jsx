import React from 'react';
import NuevoPresupuesto from '../components/NuevoPresupuesto';

const Header = () => {
  return (
    <header className='contenedor-presupuesto contenedor sombra'>
       <h1>Control de Gastos</h1>
       <form action="" className='formulario'>
        <div className='campo'>
            <label>Definir Presupuesto</label>
            <input type="text" placeholder='Añade tu presupuesto' className='nuevo-presupuesto' />
        </div>
        <div>
            <input type="submit" value="Añadir"/>
        </div>
       </form>
    </header>
  )
}

export default Header