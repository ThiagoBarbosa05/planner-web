'use client'

import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { InviteParticipantsForm } from '../trip/invite-participants-form'
import { useState } from 'react'

export function ManageParticipantsForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  console.log(isModalOpen)

  return (
    <>
      <Button
        type="button"
        variant="default"
        onClick={() => setIsModalOpen(true)}
        className="font-medium"
      >
        <Plus className="w-5 h-5" />
        Gerenciar convidados
      </Button>

      <InviteParticipantsForm
        isOpen={isModalOpen}
        closeModal={setIsModalOpen}
      />
    </>
  )
}
