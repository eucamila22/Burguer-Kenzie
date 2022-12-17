import React from 'react'
import Card from '../Card'
import { ContainerCardsStyle } from './style'

const ContainerCards = () => {
   return (
      <ContainerCardsStyle>
         <div className='container-cards'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
      </ContainerCardsStyle>
   )
}

export default ContainerCards
