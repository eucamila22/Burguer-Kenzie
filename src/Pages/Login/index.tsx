import React, { useContext } from 'react'
import Logo from '../../Assets/logo.svg'
import Group from '../../Assets/group.png'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { DivFormLogin, DivLogin, DivMessageLogin } from './style'
import Input from '../../Components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import loginSchema from '../../Schema/loginSchema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { UserContext } from '../../Contexts/UserContext'
import { Link } from 'react-router-dom'

export interface iLoginFormValues {
   email: string
   password: string
}

const LoginPage = () => {
   const { loading, userLogin } = useContext(UserContext)

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<iLoginFormValues>({
      resolver: yupResolver(loginSchema),
      mode: 'onBlur',
      defaultValues: {
         email: '',
         password: '',
      },
   })

   const submit: SubmitHandler<iLoginFormValues> = async (data) => {
      const response = { ...data }
      userLogin(response)
      reset()
   }

   return (
      <DivLogin>
         <DivMessageLogin>
            <img src={Logo} alt='Logo' />
            <div className='bagMessageLogin'>
               <div className='iconBagLogin'>
                  <BsFillBagCheckFill />
               </div>
               <div className='messageLogin'>
                  <p>
                     A vida é como um sanduíche, é preciso recheá-la com os
                     melhores ingredientes.
                  </p>
               </div>
            </div>
            <div className='divBollLogin'>
               <img className='divBollImgLogin' src={Group} alt='' />
            </div>
         </DivMessageLogin>
         <DivFormLogin>
            <nav>
               <p className='heading3'>Login</p>
            </nav>
            <form onSubmit={handleSubmit(submit)} noValidate>
               <Input
                  label='E-mail'
                  id='email'
                  type='email'
                  placeholder='Digite seu e-mail...'
                  register={register('email')}
                  disabled={loading}
               />
               {errors.email && <p>{errors.email.message}</p>}

               <Input
                  label='Senha'
                  id='password'
                  type='password'
                  placeholder='Digite sua senha...'
                  register={register('password')}
                  disabled={loading}
               />
               {errors.password && <p>{errors.password.message}</p>}

               <button className='btnLogin heading3' type='submit'>
                  {loading ? 'Entrando...' : 'Entrar'}
               </button>
            </form>
            <p className='footerLogin'>
               Crie sua conta para saborear muitas delícias e matar sua fome!
            </p>
            <Link to={`/register`} className='btn-register'>
               Cadastre-se
            </Link>
         </DivFormLogin>
      </DivLogin>
   )
}

export default LoginPage
