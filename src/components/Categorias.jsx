import React from 'react'
import { useState } from 'react';

const Categorias = ({listaCat}) => {
    

    return (
        <>
            <option value="">Todas las categorias</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            {listaCat.length > 0 ?
                <option>Funciona el listaCat</option> 
            :''}
        </>
    )
}

export default Categorias