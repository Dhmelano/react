// operador ternario

import React from 'react'

function CondicionalTres({booleano}) {
  return (
    <div>
        {booleano ? <h3> Acceso Permitido </h3> : <h4> Acceso Denegado </h4> }
    </div>
  )
}

export default CondicionalTres