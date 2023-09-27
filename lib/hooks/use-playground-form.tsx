import { useForm } from "react-hook-form"

export type FormProps = {
  prompt: string
}

export function usePlaygroundForm() {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      prompt: "Top science fiction books read in 2020",
    },
  })

  return {
    control,
    errors,
    reset,
    getValues,
    setValue,
    register,
    handleSubmit,
  }
}
