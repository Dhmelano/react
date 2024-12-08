
import { useState,useEffect } from 'react'      //importo los hooks useState y useEffect para poder utilizarlos en el componente
import ItemList from './ItemList'               

function ItemListContainer(props) {
    let [productos, setProductos] = useState ([])  // creamos un estado el cual lo vamos a utilizar para mostrarlos 
    
    useEffect (()=>{                              // creamos un useEffect para que se renderize los datos traidos sin renderizar toda la web
        fetch('https://pokeapi.co/api/v2/pokemon/') // peticion a la api de pokemon
        .then((data)=>{                                  // cuerpo de la respuesta afirmativa, data es el parametro que usa la funcion, pero podemos usar cualquier palabra
            console.log(data)                                 
            return data.json()                           // pasamos los datos a formato json para poder utilizarlos
        })
        .then((datos)=>{                              // creamos otro then que se va a encargar de colocar los datos en la variable productos.
          console.log(datos)
          console.log(datos.results)                    
          setProductos(datos.results)                  // con setProductos colocamos los datos de la api en la variable productos para despues poder utilizarlos          
          console.log(productos)                         
        }) 
        .catch((error)=>{               // en caso de que halla algun error al traer los datos de la api se ejecuta el catch
            console.log(error)
        })

    },[])

    return (
    <>
      <h1>POKEMONn</h1>
      <ItemList products={productos} />    {/* una vez obtenido los datos los colocamos en este component en forma de prop entre las llaves por que es una variable */}
                                           {/* y se lo mandamos al component ItemList */}
    </>
  )
}

export default ItemListContainer