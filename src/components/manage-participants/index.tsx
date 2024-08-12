import { CircleCheck, CircleDashed } from 'lucide-react'
import { ManageParticipantsForm } from './manage-participants-form'

export function ManageParticipants() {
  return (
    <section className="flex w-full flex-col mt-8 sm:mt-0  gap-6 pb-10">
      <h3 className="text-lg font-semibold md:text-xl">Convidados</h3>
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

        <ManageParticipantsForm />
      </div>
    </section>
  )
}
