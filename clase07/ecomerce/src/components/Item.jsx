

function Item({product}) {              // este component recibe por medio de props los datos de la api que anteriormente fueron enviados por el component ItemList en la prop product={product}
  return (
    <div>
      <h2>{product.name}</h2>           {/* tomamos de las props, donde vienen los datos obtenidos de la api, el atributo name y los mostramos en la web*/} 
      <div>{product.url}</div>          {/* tomamos de las props, donde vienen los datos obtenidos de la api, el atributo url y los mostramos en la web*/}
    </div>
  )
}

export default Item 