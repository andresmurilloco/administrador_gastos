import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje';

/* Componente que contiene lo relacionado con el presupuesto inicial.
Considero usarlo al hacer click en editar presupuesto */

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto}) => {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e)=>{
    e.preventDefault();
    if(!presupuesto || presupuesto < 0){
      setMensaje('No es un presupuesto válido');
      return;
    } 
      setMensaje('')
      setIsValidPresupuesto(true);
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
        <div className='campo'>
            <label>Definir Presupuesto</label>
            <input type="number" placeholder='Añade tu presupuesto' className='nuevo-presupuesto' value={presupuesto} onChange = {e => setPresupuesto(Number(e.target.value))} />
        </div>
        <div>
            <input type="submit" value="Añadir"/>
        </div>
        {mensaje && <Mensaje tipo = "error">{mensaje}</Mensaje> }
       </form>
    </div>
  )
}

export default NuevoPresupuesto