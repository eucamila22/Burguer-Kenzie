import '../../Components/Modal/style.css'
import React, { useContext } from 'react'
import Modal from 'react-modal'
import { CartContext } from '../../Contexts/CartContext'
import CardCart from '../CardCart'
import EmptyMessage from '../EmptyCart'

Modal.setAppElement('#root')

export const CreateModal = () => {
   const { modalHandle, modalIsOpen, cart, removeAll } = useContext(CartContext)

   return (
      <div className='container'>
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={modalHandle}
            contentLabel='Example Modal'
            overlayClassName='modal-overlay'
            className='modal-content'
         >
            <div className='divModalHeader'>
               <h2 className='modalTitle'>Carrinho de compras</h2>
               <button className='buttonCloseModal' onClick={modalHandle}>
                  X
               </button>
            </div>

            {cart.length === 0 && <EmptyMessage />}

            <ul className='containerCards'>
               {cart?.map((elem) => (
                  <CardCart key={elem.id} elem={elem} />
               ))}
            </ul>

            {cart.length !== 0 && (
               <div className='total'>
                  <div>
                     <p className='heading3'>Total</p>
                     <p className='heading3'>
                        R${' '}
                        {cart
                           ?.reduce((acc, act) => acc + act.price, 0)
                           .toFixed(2)}
                     </p>
                  </div>
                  <button className='btnRemoveAll' onClick={() => removeAll()}>
                     Remover Todos
                  </button>
               </div>
            )}
         </Modal>
      </div>
   )
}
