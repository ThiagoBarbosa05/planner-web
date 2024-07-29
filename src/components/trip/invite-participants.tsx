import { ArrowRight, UserRoundPlus } from 'lucide-react'
import { Button } from '../ui/button'

export function InviteParticipants() {
  return (
    <div className="text-zinc-100 flex flex-col gap-5 bg-zinc-900 rounded-xl w-full py-[0.875rem] px-4">
      <div className="flex items-center gap-2">
        <UserRoundPlus className="w-5 h-5 text-zinc-400" />
        <button
          type="button"
          value="Quando?"
          className="bg-transparent flex-1 flex items-start text-zinc-400 border-none outline-none"
        >
          Quem estará na viagem?
        </button>
      </div>
      <span className="h-[1px] w-full bg-zinc-800" />

      <Button variant="primary">
        Confirmar viagem
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  )
}
