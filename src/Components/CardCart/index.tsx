import React, { useContext } from 'react'
import { LiCard } from './style'
import { BiTrash } from 'react-icons/bi'
import { CartContext } from '../../Contexts/CartContext'

interface iElemProps {
    elem: {
        id: number
        img: string
        name: string
        price: number
    }
}

const CardCart = ({ elem }: iElemProps) => {
    const { removeCard } = useContext(CartContext)

    return (
        <LiCard>
            <div className='divImg'>
                <img src={elem.img} alt={elem.name} />
            </div>
            <div className='divCart'>
                <div className='titleCart'>
                    <p>{elem.name}</p>
                    <BiTrash
                        className='trash'
                        onClick={() => {
                            removeCard(elem)
                        }}
                    />
                </div>
            </div>
        </LiCard>
    )
}

export default CardCart
