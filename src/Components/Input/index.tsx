import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { FieldErrorsImpl } from 'react-hook-form/dist/types'

interface iInputProps {
   type: 'text' | 'email' | 'password' | 'number'
   id: string
   label: string
   placeholder: string
   register: UseFormRegisterReturn
   error?: FieldErrorsImpl
   disabled: boolean
}

const Input = ({
   type,
   id,
   label,
   placeholder,
   register,
   error,
   disabled,
}: iInputProps) => {
   return (
      <fieldset>
         <label htmlFor={id}>{label}</label>
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            {...register}
            disabled={disabled}
         />
         {/* {error && <p>{error.message}</p>} */}
      </fieldset>
   )
}

export default Input
