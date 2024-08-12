'use client'

import { UserRoundPlus } from 'lucide-react'

import { Dispatch, SetStateAction } from 'react'
import { ConfirmTrip } from './confirm-trip'

interface InviteParticipantsProps {
  setIsInviteParticipantsModalOpen: Dispatch<SetStateAction<boolean>>
  emails: string[]
}

export function InviteParticipants({
  setIsInviteParticipantsModalOpen,
  emails,
}: InviteParticipantsProps) {
  const quantityEmailsGuests = emails.length

  return (
    <div className="text-zinc-100 flex flex-col gap-5 shadow-shape bg-zinc-900 rounded-xl w-full py-[0.875rem] px-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          value="Quando?"
          onClick={() => setIsInviteParticipantsModalOpen(true)}
          className="bg-transparent flex-1 gap-2 flex items-start text-zinc-400 border-none outline-none"
        >
          <UserRoundPlus className="w-5 h-5 text-zinc-400" />
          {quantityEmailsGuests > 0
            ? `${quantityEmailsGuests} pessoa(s) convidadas(s)`
            : 'Quem estará na viagem?'}
        </button>
      </div>
      <span className="h-[1px] w-full bg-zinc-800" />
      <ConfirmTrip />
    </div>
  )
}
