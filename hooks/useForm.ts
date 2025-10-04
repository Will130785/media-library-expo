import { useState } from 'react'

export const useForm = <T>(defaultValues: T) => {
  const [formValues, setFormValues] = useState<T>(defaultValues)

  const handleChange = (e: string, field: string) => {
    setFormValues((currentState) => ({ ...currentState, [field]: e }))
  }

  return {
    formValues,
    setFormValues,
    handleChange,
  }
}
