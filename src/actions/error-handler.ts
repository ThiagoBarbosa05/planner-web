import { ZodError } from 'zod'

export type FormState = {
  message: string
  fieldErrors: Record<string, string[] | undefined>
  status: 'UNSET' | 'SUCCESS' | 'ERROR'
}

export const EMPTY_FORM_STATE: FormState = {
  message: '',
  fieldErrors: {},
  status: 'UNSET' as const,
}

type OnSuccessParams = {
  status: FormState['status']
  message: string
}

type OnErrorParams = {
  status: FormState['status']
  err: unknown
}

export class ActionsResponse {
  static onSuccess({ message, status }: OnSuccessParams): FormState {
    return {
      status,
      message,
      fieldErrors: {},
    }
  }

  static onError({ status, err }: OnErrorParams) {
    if (err instanceof ZodError) {
      return {
        status,
        message: 'Erro de validação',
        fieldErrors: err.flatten().fieldErrors,
      }
    }

    if (err instanceof Error) {
      return {
        status,
        message: err.message,
        fieldErrors: {},
      }
    }
    return {
      status,
      message: 'Erro desconhecido',
      fieldErrors: {},
    }
  }
}
