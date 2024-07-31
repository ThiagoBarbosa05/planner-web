import { CircleCheck } from 'lucide-react'
import { CreateActivityForm } from './create-activity-form'

export function Activity() {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="flex-1 text-2xl font-semibold">Atividades</h2>
        <CreateActivityForm />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col  gap-3">
          <div>
            <strong className="text-zinc-50 text-xl">Dia 15</strong>
            <span className="text-xs text-zinc-500 inline-block pl-2">
              Sábado
            </span>
          </div>
          <div className="bg-zinc-900 flex items-center shadow-shape rounded-xl py-[0.625rem] gap-3 px-4">
            <CircleCheck className="w-5 h-5 text-lime-300" />
            <span className="flex-1 text-zinc-100">Corrida de cart</span>
            <span className="text-zinc-400 text-sm">14:00h</span>
          </div>
          <div className="bg-zinc-900 flex items-center shadow-shape rounded-xl py-[0.625rem] gap-3 px-4">
            <CircleCheck className="w-5 h-5 text-lime-300" />
            <span className="flex-1 text-zinc-100">Corrida de cart</span>
            <span className="text-zinc-400 text-sm">14:00h</span>
          </div>
          <div className="bg-zinc-900 flex items-center shadow-shape rounded-xl py-[0.625rem] gap-3 px-4">
            <CircleCheck className="w-5 h-5 text-lime-300" />
            <span className="flex-1 text-zinc-100">Corrida de cart</span>
            <span className="text-zinc-400 text-sm">14:00h</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <strong className="text-zinc-50 text-xl">Dia 15</strong>
            <span className="text-xs text-zinc-500 inline-block pl-2">
              Sábado
            </span>
          </div>
          <div className="bg-zinc-900 flex items-center shadow-shape rounded-xl py-[0.625rem] gap-3 px-4">
            <CircleCheck className="w-5 h-5 text-lime-300" />
            <span className="flex-1 text-zinc-100">Corrida de cart</span>
            <span className="text-zinc-400 text-sm">14:00h</span>
          </div>
          <div className="bg-zinc-900 flex items-center shadow-shape rounded-xl py-[0.625rem] gap-3 px-4">
            <CircleCheck className="w-5 h-5 text-lime-300" />
            <span className="flex-1 text-zinc-100">Corrida de cart</span>
            <span className="text-zinc-400 text-sm">14:00h</span>
          </div>
          <div className="bg-zinc-900 flex items-center shadow-shape rounded-xl py-[0.625rem] gap-3 px-4">
            <CircleCheck className="w-5 h-5 text-lime-300" />
            <span className="flex-1 text-zinc-100">Corrida de cart</span>
            <span className="text-zinc-400 text-sm">14:00h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
