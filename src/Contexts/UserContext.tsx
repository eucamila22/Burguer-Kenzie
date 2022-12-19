import { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../Service/api'
import { iProviderProps, iRequestError } from './@types'
import { AxiosError } from 'axios'
import { iRegisterFormValues } from '../Pages/Register'
import { useNavigate } from 'react-router-dom'
import { iLoginFormValues } from '../Pages/Login'

interface iUSerResponse {
   accessToken: string
   user: {
      id: string
      name: string
      email: string
   }
}

interface iUserContext {
   loading: boolean
   user: iUSerResponse | null
   userLogin: (data: iLoginFormValues) => void
   setLoading: React.Dispatch<React.SetStateAction<boolean>>
   setUser: React.Dispatch<React.SetStateAction<iUSerResponse | null>>
   userRegister: (
      formData: iRegisterFormValues,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>
   ) => void
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iProviderProps) => {
   const navigate = useNavigate()
   const [loading, setLoading] = useState(false)
   const [user, setUser] = useState<iUSerResponse | null>(null)

   const userLogin = async (data: iLoginFormValues) => {
      try {
         setLoading(true)
         const response = await api.post<iUSerResponse>('login', data)
         setUser(response.data)
         localStorage.setItem('@TOKEN', response.data.accessToken)
         toast.success('Login realizado com sucesso!')
         setTimeout(() => {
            navigate('/home')
         }, 4000)
      } catch (err) {
         setTimeout(() => {
            navigate('/')
         }, 4000)
         toast.error('Houve um erro!')
      } finally {
         setLoading(false)
      }
   }

   const userRegister = async (
      formData: iRegisterFormValues,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>
   ) => {
      try {
         setLoading(true)
         const response = await api.post<iUSerResponse>('users', formData)
         console.log(response)
         toast.success('Cadastro realizado com successo!')
         setTimeout(() => {
            navigate('/')
         }, 4000)
      } catch (error) {
         const currentError = error as AxiosError<iRequestError>
         toast.error(currentError.message)
      } finally {
         setLoading(false)
      }
   }

   return (
      <UserContext.Provider
         value={{ userRegister, user, setUser, loading, setLoading, userLogin }}
      >
         {children}
      </UserContext.Provider>
   )
}
