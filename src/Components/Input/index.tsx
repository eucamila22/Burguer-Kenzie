import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface iInputProps {
   type: 'text' | 'email' | 'password' | 'number'
   id: string
   label: string
   placeholder: string
   register: UseFormRegisterReturn
   disabled: boolean
}

const Input = ({
   type,
   id,
   label,
   placeholder,
   register,
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
      </fieldset>
   )
}

export default Input
