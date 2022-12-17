import React, { useContext } from 'react'
import { DivFormRegister, DivMessageRegister, DivRegister } from './style'
import Logo from '../../Assets/logo.svg'
import { BsFillBagCheckFill } from 'react-icons/bs'
import Group from '../../Assets/group.png'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../Components/Input'
import { UserContext } from '../../Contexts/UserContext'
import registerSchema from '../../Schema/registerSchema'

export interface iRegisterFormValues {
   name: string
   email: string
   password: string
   confirmPassword?: string
}

const RegisterPage = () => {
   const { userRegister, setLoading, loading } = useContext(UserContext)

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<iRegisterFormValues>({
      resolver: yupResolver(registerSchema),
      mode: 'onBlur',
      defaultValues: {
         name: '',
         email: '',
         password: '',
      },
   })
   
   const submit: SubmitHandler<iRegisterFormValues> = async (data) => {
      const response = { ...data }
      delete response.confirmPassword
      userRegister(response, setLoading)
      console.log(response)
      reset()
   }

   return (
      <DivRegister>
         <DivMessageRegister>
            <img src={Logo} alt='Logo' />
            <div className='bagMessage'>
               <div className='iconBag'>
                  <BsFillBagCheckFill />
               </div>
               <div className='message'>
                  <p>
                     A vida é como um sanduíche, é preciso recheá-la com os
                     melhores ingredientes.
                  </p>
               </div>
            </div>
            <div className='divBoll'>
               <img src={Group} alt='' />
            </div>
         </DivMessageRegister>
         <DivFormRegister>
            <nav>
               <p className='heading3'>Cadastro</p>
               <Link to={'/'} className='headline'>
                  Retornar para o Login
               </Link>
            </nav>
            <form onSubmit={handleSubmit(submit)} noValidate>
               <Input
                  label='Nome'
                  id='name'
                  type='text'
                  placeholder='Digite seu nome...'
                  register={register('name')}
                  disabled={loading}
               />
               <Input
                  label='E-mail'
                  id='email'
                  type='email'
                  placeholder='Digite seu e-mail...'
                  register={register('email')}
                  disabled={loading}

               />
               <Input
                  label='Senha'
                  id='password'
                  type='password'
                  placeholder='Digite sua senha...'
                  register={register('password')}
                  disabled={loading}

               />
               <Input
                  label='Confirmar Senha'
                  id='confirmPassword'
                  type='password'
                  placeholder='Confirme sua senha...'
                  register={register('password')}
                  disabled={loading}

               />
               <button type='submit' disabled={loading}>
                  {loading ? 'Cadastrando...' : 'Cadastrar'}
               </button>
            </form>
         </DivFormRegister>
      </DivRegister>
   )
}

export default RegisterPage
