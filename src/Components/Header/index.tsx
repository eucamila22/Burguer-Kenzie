import React from 'react'
import { HeaderHomeStyle } from './style'
import Logo from '../../Assets/logo.svg'
import { BiCartAlt, BiSearch } from 'react-icons/bi'
import { MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'

const HeaderHome = () => {
   return (
      <HeaderHomeStyle>
         <div className='containerHeader'>
            <div>
               <img src={Logo} alt='Logo' />
            </div>
            <div className='containerIcon'>
               <input type='text' placeholder='Digite aqui...' />
               <div className='divSearch'>
                  <BiSearch
                     className='icon search'
                     onClick={() => console.log('oi')}
                  />
               </div>
               <BiCartAlt className='icon cart' />
               <Link to={`/`} onClick={() => {localStorage.removeItem('@TOKEN')}}>
                  <MdLogout className='icon logOut' />
               </Link>
            </div>
         </div>
      </HeaderHomeStyle>
   )
}

export default HeaderHome
