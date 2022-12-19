import React, {useContext} from 'react'
import { CartContext } from '../../Contexts/CartContext'
import { CardStyle } from './style'

interface iElemProps {
   elem: {
      id: number
      img: string
      name: string
      category: string
      price: number
   }
}

const Card = ({ elem }: iElemProps) => {

   const { addToCart} = useContext(CartContext)
   return (
      <>
         <CardStyle key={elem.id}>
            <div className='box-img'>
               <img src={elem.img} alt={elem.name} />
            </div>
            <div className='description'>
               <p className='heading3 name'>{elem.name}</p>
               <small className='caption category'>{elem.category}</small>
               <p className='price body'>{elem.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</p>
               <button className='btn-add body-2' onClick={() => addToCart(elem)}>Adicionar</button>
            </div>
         </CardStyle>
      </>
   )
}

export default Card
