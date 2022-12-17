import React from 'react'
import Hamburguer from '../../Assets/burg.jpg'
import { NotFoundS } from './style'

const NotFound = () => {
  return (
    <NotFoundS>
        <div>
            <img src={Hamburguer} alt="" />
            <h1>PÁGINA NÃO ENCONTRADA</h1>
        </div>
    </NotFoundS>
  )
}

export default NotFound
