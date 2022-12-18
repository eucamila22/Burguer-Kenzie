import React, { useContext } from 'react'
import { HeaderHomeStyle } from './style'
import Logo from '../../Assets/logo.svg'
import { BiCartAlt, BiSearch } from 'react-icons/bi'
import { MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext'
import { CreateModal } from '../Modal'

const HeaderHome = () => {
   const { modalHandle, modalIsOpen, searchProds, setSearchProds } =
      useContext(CartContext)

   return (
      <HeaderHomeStyle>
         <div className='containerHeader'>
            <div>
               <img src={Logo} alt='Logo' />
            </div>
            <div className='containerIcon'>
               <input
                  type='text'
                  placeholder='Digite aqui...'
                  value={searchProds}
                  onChange={(event) => setSearchProds(event.target.value)}
               />
               <div className='divSearch'>
                  <BiSearch className='icon search' />
               </div>
               <BiCartAlt className='icon cart' onClick={modalHandle} />
               <Link
                  to={`/`}
                  onClick={() => {
                     localStorage.removeItem('@TOKEN')
                  }}
               >
                  <MdLogout className='icon logOut' />
               </Link>
            </div>
         </div>
         {modalIsOpen && <CreateModal />}
      </HeaderHomeStyle>
   )
}

export default HeaderHome
