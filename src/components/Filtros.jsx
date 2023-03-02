import { useEffect, useState } from "react";
import Categorias from "./Categorias";

const Filtros = ({filtro, setFiltro}) => {
  const [listaCat, setListaCat] = useState([]);

  const handlerNuevaCategoria=()=>{
    console.log('Funciona');
    /*Aquí se debe poner un localstore y asiganrlo a listaCat*/
  }

  return (
    <div className="filtros sombra contenedor">
        <form action="">
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select onChange={e => setFiltro(e.target.value)}>
                    <Categorias listaCat = {listaCat}/>
                </select>
            </div>
        </form>
        <button className=" nuevoPresupuestoBttn " onClick={handlerNuevaCategoria} >Agregar nueva categoria</button>
    </div>
  )
}

export default Filtros