// Return temprano
// Esta tecnica la usamos en js y es cuando evitamos else

import React from 'react'

function CondicionalUno( {nombre}) {
    if(nombre === "paola") {
        return <h1>Hola Administrador</h1>
    }

    return <h1>Hola {nombre}</h1>
  
}

export default CondicionalUno