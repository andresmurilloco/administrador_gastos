//React
import { object } from 'prop-types';
import { useState, useEffect } from 'react'
//Componentes
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
//Scripts
import {generarId} from './helpers'
//Imagenes y otros
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {
  //Hooks
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({});

  //Funciones
  useEffect(() => {
    if(Object.keys(gastoEditar).length>0){
      setModal(true);
      
      setTimeout(() => {
        setAnimarModal(true);
      }, 200);
    }
  }, [gastoEditar])

  const handleNuevoGasto = ()=>{
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  }

  const guardarGasto=gasto=>{
    if(gasto.id){
      //Actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else{
      //Nuevo
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
      setGastoEditar({});
    }
    ocultarModal();
  }

  const ocultarModal=()=>{
    setAnimarModal(false);
    setTimeout(() => {
        setModal(false);
    }, 500);
  }

  const eliminarGasto = id=>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    console.log(gastosActualizados);
    setGastos(gastosActualizados);
  }

  return (
    <div className={modal ? 'fijar':''}>
      <Header
        gastos = {gastos}
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPresupuesto = {setIsValidPresupuesto}
      />
        {isValidPresupuesto && (
          <>
            <main>
              <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto}/>
            </main>
            <div className='nuevo-gasto'>
              <img
                src={IconoNuevoGasto}
                alt="Icono nuevo gasto"
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )}
      
      {modal && <Modal setModal={setModal} setGastoEditar={setGastoEditar} animarModal={animarModal} gastoEditar={gastoEditar} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto}/>}
    </div>
  )
}

export default App