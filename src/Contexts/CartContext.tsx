import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../Service/api'
import { iProviderProps } from './@types'

interface iProducts {
   id: number
   name: string
   category: string
   price: number
   img: string
}

interface iCartProducts {
   id: number
   name: string
   price: number
   img: string
}

interface iCartContextProps {
   modalHandle: () => void
   modalIsOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   products: iProducts[]
   cart: iCartProducts[]
   addToCart: (element: iCartProducts) => void
   removeAll: () => void
   removeCard: (id: iCartProducts) => void
   searchProds: string
   setSearchProds: React.Dispatch<React.SetStateAction<string>>
   showProducts: iProducts[]
}

export const CartContext = createContext({} as iCartContextProps)

export const CartProvider = ({ children }: iProviderProps) => {
   const [products, setProducts] = useState([] as iProducts[])
   const [modalIsOpen, setIsOpen] = useState(false)
   const [cart, setCart] = useState([] as iCartProducts[])
   const [searchProds, setSearchProds] = useState('')

   useEffect(() => {
      async function getAllProducts() {
         const token = localStorage.getItem('@TOKEN')
         if (token) {
            try {
               api.defaults.headers.authorization = `Bearer ${token}`
               const { data } = await api.get('products')
               setProducts(data)
            } catch (error) {
               console.log(error)
            } finally {
            }
         }
      }
      getAllProducts()
   }, [])

   const modalHandle = () => {
      if (modalIsOpen === false) {
         setIsOpen(true)
      } else {
         setIsOpen(false)
      }
   }

   function addToCart(element: iCartProducts) {
      const getAddProducts = products.find((elem) => elem.id === element.id)
      const noRepeatAddProducts = cart.some(
         (elem) => elem.id === getAddProducts?.id
      )
      if (!noRepeatAddProducts) {
         setCart((previuosCart: iProducts[] | any) => {
            return [...previuosCart, getAddProducts]
         })
         toast.success('Produto adicionado com sucesso!')
      } else {
         toast.error('Este produto já foi adicionado!')
      }
   }

   const removeAll = () => {
      setCart([])
      toast.info('Produtos removidos!')
      setTimeout(() => {
         toast.warn('Sacola vazia! Adicione itens!')
      }, 2000)
   }

   function removeCard(id: iCartProducts) {
      const removeAddProdcts = cart.filter((elem) => elem !== id)
      setCart(removeAddProdcts)
      toast.info('Produto removido com sucesso!')
   }

   const showProducts = !searchProds
    ? products
    : products.filter(
        (element) =>
          element.name
            .toLowerCase()
            .includes(searchProds.toLocaleLowerCase()) ||
          element.category
            .toLowerCase()
            .includes(searchProds.toLocaleLowerCase())
      );

   return (
      <CartContext.Provider
         value={{
            showProducts,
            searchProds,
            setSearchProds,
            removeCard,
            removeAll,
            addToCart,
            cart,
            modalHandle,
            products,
            modalIsOpen,
            setIsOpen,
         }}
      >
         {children}
      </CartContext.Provider>
   )
}
