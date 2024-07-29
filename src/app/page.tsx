import Image from 'next/image'
import { CreateTripForm } from '../components/trip/create-form'
export default function Home() {
  return (
    <main className="p-5 flex-1 flex flex-col gap-10 items-center bg-no-repeat bg-center bg-main justify-center">
      <header className="flex flex-col items-center gap-2 justify-center">
        <Image
          src="/logo.svg"
          width={172}
          height={44}
          alt="planner logo"
          className="w-[172px] h-11"
        />
        <h3 className="text-zinc-300 leading-6 text-center text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </h3>
      </header>

      <CreateTripForm />

      <p className="text-center text-sm max-w-[446px] text-zinc-400 leading-5">
        Ao planejar sua viagem pela plann.er você automaticamente concorda com
        nossos{' '}
        <a href="#" className="text-zinc-100 underline">
          termos de uso
        </a>{' '}
        e{' '}
        <a href="#" className="text-zinc-100 underline">
          políticas de privacidade
        </a>
        .
      </p>
    </main>
  )
}
