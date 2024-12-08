import './Card.css'
import { useState } from 'react'

function CardItem({Item, Valor, Img}) {
    const [valor, setValor] = useState(0)
    return (
        <>
            <div className="divCard">
                <img src={Img} alt="imagen" className="imgItem"/>
                <h3 className="titleCard">{Item}</h3>
                <p className="priceCard">${Valor}</p>
                <button type="button" class="btn btn-dark btnCard">Agregar</button>

            </div>
        </>
    )
}

export default CardItem