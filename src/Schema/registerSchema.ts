import * as yup from 'yup'

const registerSchema = yup.object().shape({
   name: yup.string().required('Esse campo é obrigatório, digite seu nome!'),
   email: yup.string().required('Esse campo é obrigatório, digite seu email!'),
   password: yup.string().required('A senha é obrigatória'),
   confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Senha não confere!'),
})

export default registerSchema
