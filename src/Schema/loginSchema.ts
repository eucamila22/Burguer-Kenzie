import * as yup from 'yup'

const loginSchema = yup.object().shape({
   email: yup.string().required('Esse campo é obrigatório, digite seu email!'),
   password: yup.string().required('A senha é obrigatória')
})

export default loginSchema
