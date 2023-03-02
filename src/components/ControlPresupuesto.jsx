import React, { useState } from 'react'
import { useEffect } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({setIsValidPresupuesto, setPresupuesto, presupuesto, setGastos, gastos}) => {
    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(presupuesto);
    const [gastado, setGastado] = useState(0);

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto-totalGastado;
        setGastado(totalGastado);
        setDisponible(totalDisponible);

        const nuevoPorcentaje = ((presupuesto - totalDisponible)/presupuesto)*100;
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje.toFixed(2));
        }, 1000);
    }, [gastos])

    /* Se podría agregar una función de seleccionar currency por moneda y región. */

    const formatearCantidad = (cantidad)=>{
        return cantidad.toLocaleString('es-CO', {
            style:'currency',
            currency: 'COP'
        })
    }

    const handleNuevoPresupuesto=()=>{
        setIsValidPresupuesto(false);
    }

    const handleReset=()=>{
        const resultado = confirm('Desea eliminar todos los registros?')
        if(resultado){
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        } else{
            return;
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor:`${porcentaje > 100 ? '#dc2626' : '#3B82F6'}`, 
                    trailColor: '#F5F5F5', 
                    textColor: `${porcentaje > 100 ? '#dc2626' : '#3B82F6'}`
                })}
                value={porcentaje}
                text= {`${porcentaje}%`}
            />
        </div>
        <div className='contenido-presupuesto'>
            <button className='nuevoPresupuestoBttn' onClick={handleNuevoPresupuesto}>Editar presupuesto</button>
            <button type='button' className=' reset-app' onClick={handleReset}>Reiniciar app</button>
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto