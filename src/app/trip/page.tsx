import { Activity } from '@/components/activity'
import { Header } from '@/components/header'
import { Links } from '@/components/link'
import { Button } from '@/components/ui/button'
import { CircleCheck, CircleDashed, Plus } from 'lucide-react'

export default function Page() {
  return (
    <div className="px-4 flex-1 text-zinc-100 pt-4 ">
      <Header />
      <main>
        <Activity />

        <span className="w-full h-[1px] bg-zinc-800 mt-6 mb-6 block" />

        <Links />

        <section className="flex flex-col mt-8 gap-6 pb-10">
          <h3 className="text-lg font-semibold">Convidados</h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 justify-between">
              <div className="overflow-hidden">
                <span className="text-zinc-100 font-medium block pb-[0.375rem]">
                  Reserva do AirBnB
                </span>
                <p className=" text-zinc-400 text-sm leading-none">
                  example@email.com
                </p>
              </div>
              <CircleCheck className="w-5 h-5 text-lime-300" />
            </div>

            <div className="flex items-center gap-3 justify-between">
              <div className="overflow-hidden">
                <span className="text-zinc-100 font-medium block pb-[0.375rem]">
                  Reserva do AirBnB
                </span>
                <p className=" text-zinc-400 text-sm leading-none">
                  example@email.com
                </p>
              </div>
              <CircleDashed className="w-5 h-5 text-zinc-400" />
            </div>

            <Button variant="default" className="font-medium">
              <Plus className="w-5 h-5" />
              Gerenciar convidados
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
