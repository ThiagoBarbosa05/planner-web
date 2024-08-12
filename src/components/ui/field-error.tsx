import { FormState } from '@/actions/error-handler'

interface FieldErrorProps {
  formState: FormState
  fieldName: string
}

export function FieldError({ fieldName, formState }: FieldErrorProps) {
  return (
    <span className="text-xs mt-2 pl-[28px] text-lime-300">
      {formState.fieldErrors[fieldName]?.[0]}
    </span>
  )
}
