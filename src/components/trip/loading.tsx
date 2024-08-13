import { useFormStatus } from 'react-dom'

export function Loading() {
  const { pending } = useFormStatus()

  return (
    <>
      {pending && (
        <span className="bg-zinc-950/75 backdrop-blur-sm fixed inset-0 flex items-center justify-center">
          <span className="text-zinc-50 text-center md:text-xl  animate-pulse">
            Criando viagem...
          </span>
        </span>
      )}
    </>
  )
}
