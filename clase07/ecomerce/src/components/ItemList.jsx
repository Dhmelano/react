
import Item from './Item'

function ItemList({products}) {                                       // ItemList recibe la prop "products" y su valor "productos" donde estan los datos de la api 
  return (
    <div>
        {products.map((product)=>{                                    // siempre entre llaves para trabajar con variables, aqui le hacemos un map osea un recorrido
                                                                      // uno por uno a los datos recibidos de la api que estan en el prop "products"
          return <Item key={product.name} product={product}/>         // por ultimo retornamos el component Item el cual es el producto recibido uno por uno
                                                                      // al component item le agregamos un key por cada producto recorrido y le ponemos una props "product" y le asignamos los datos obtenidos de la api 
        })}
    </div>
  )
}

export default ItemList