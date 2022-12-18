import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import Card from '../Card'
import { ContainerCardsStyle } from './style'



const ContainerCards = () => {
   const { showProducts } = useContext(CartContext)

   return (
      <ContainerCardsStyle>
         <div className='container-cards'>
            {showProducts?.map((elem) => (
               <Card key={elem.id} elem={elem}/>
            ))}
         </div>
      </ContainerCardsStyle>
   )
}

export default ContainerCards
