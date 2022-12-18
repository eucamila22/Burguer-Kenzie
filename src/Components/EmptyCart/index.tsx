import React from 'react'
import { DivModalBody } from './style'

const EmptyMessage = () => {
   return (
      <DivModalBody>
         <p>Sua sacola está vazia</p>
         <small>Adicione itens</small>
      </DivModalBody>
   )
}

export default EmptyMessage
