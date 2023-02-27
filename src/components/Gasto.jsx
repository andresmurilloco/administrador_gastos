import React from 'react'

//Librerias externas
import{
  LeadingActions,
  SwipeableList,
  SwipeAction,
  SwipeableListItem,
  TrailingActions
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css"

//Javascript
import { formatearFecha } from "../helpers/index";

// //Imagenes
import IconoAhorro from "../img/icono_ahorro.svg"
import IconoCasa from "../img/icono_casa.svg"
import IconoComida from "../img/icono_comida.svg"
import IconoGastos from "../img/icono_gastos.svg"
import IconoOcio from "../img/icono_ocio.svg"
import IconoSalud from "../img/icono_salud.svg"
import IconoSuscripciones from "../img/icono_suscripciones.svg"

const diccionarioIconos = {
  ahorro : IconoAhorro,
  casa : IconoCasa,
  comida : IconoComida,
  gastos : IconoGastos,
  ocio : IconoOcio,
  salud : IconoSalud,
  suscripciones : IconoSuscripciones,
}

export const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const {nombre, categoria, cantidad, fecha, id}=gasto;
    const leadingActions =()=>(
      <LeadingActions>
        <SwipeAction onClick={()=>setGastoEditar(gasto)}>
          Editar
        </SwipeAction>
      </LeadingActions>
    )
    const trailingActions=()=>(
      <TrailingActions>
        /* Destructive está eliminando el registro siguiente al que se desea eliminar.
        Deshabilitado temporalmente. */
        <SwipeAction onClick={()=>eliminarGasto(id)} /* destructive={true} */>
          Eliminar
        </SwipeAction>
      </TrailingActions>
    )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions = {leadingActions()}
        trailingActions = {trailingActions()}
      >
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
              <img src={diccionarioIconos[categoria]} alt="Icono gastos"/>
                <div className='descripcion-gasto'>
                    <p className='categoria'>{categoria}</p>
                    <p className='nombre-gasto'>{nombre}</p>
                    <p className='fecha-gasto'>
                      Agregado el:{' '}<span>{formatearFecha(fecha)}</span>
                    </p>
                </div>
            </div>
            <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto;