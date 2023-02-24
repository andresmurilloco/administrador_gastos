//React
import React from 'react'
import { useState, useEffect } from 'react'
//Componentes
import Mensaje from './Mensaje'
//Botones e imagenes
import BotonCerrar from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('0');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('')
    
    //Funciones y operaciones
    useEffect(() => {
        if(Object.keys(gastoEditar).length>0){
          setNombre(gastoEditar.nombre);
          setCantidad(gastoEditar.cantidad);
          setCategoria(gastoEditar.categoria);
        }
      }, [])

    const ocultarModal=()=>{
        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit=e=>{
        e.preventDefault();
        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;
        }
        guardarGasto({nombre, cantidad, categoria});
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img 
                    src={BotonCerrar} 
                    alt="Cerrar modal"
                    onClick={ocultarModal} 
                />
            </div>
            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje> }
                <div className='campo'>
                    <label htmlFor="nombre">Nombre del gasto</label>
                    <input 
                        type="text"
                        id='nombre'
                        placeholder='Añada nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        type="number"
                        id='cantidad'
                        placeholder='Añada una cantidad. Ej. 300'
                        value={cantidad}
                        onChange={e=>setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre del gasto</label>
                    <select id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value='Añadir Gasto' onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default Modal