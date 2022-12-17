import React from 'react'
import { CardStyle } from './style'
import hamburg from '../../Assets/hamburg.svg'
const Card = () => {
  return (
    <CardStyle>
      <div className="box-img">
        <img src={hamburg} alt="" />
      </div>
      <div className="description">
        <p className='heading3 name'>Hamburguer</p>
        <small className='caption category'>Sanduíche</small>
        <p className='price body'>R$ 14,99</p>
        <button className='btn-add body-2'>Adicionar</button>
      </div>
         
    </CardStyle>
  )
}

export default Card
