import React from 'react'

function CondicionalDos({booleano}) {
    return(
        <>
            {booleano && <h2> Usuario Registrado </h2> }
            { ! booleano && <h2> Usuario No Registrado </h2>}
        
        </>
    )
  // Recibo un 
}

export default CondicionalDos