'use client'

import { AtSign, Plus, UserRoundPlus, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Modal } from '../modal'
import { useState } from 'react'
import { ConfirmTrip } from './confirm-trip'

export function InviteParticipants() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="text-zinc-100 flex flex-col gap-5 shadow-shape bg-zinc-900 rounded-xl w-full py-[0.875rem] px-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          value="Quando?"
          onClick={() => setIsModalOpen(true)}
          className="bg-transparent flex-1 gap-2 flex items-start text-zinc-400 border-none outline-none"
        >
          <UserRoundPlus className="w-5 h-5 text-zinc-400" />
          Quem estará na viagem?
        </button>
      </div>
      <span className="h-[1px] w-full bg-zinc-800" />
      <ConfirmTrip />

      <Modal.Root isOpen={isModalOpen}>
        <Modal.Header>
          <Modal.Title>Selecionar Convidados</Modal.Title>
          <Modal.Description>
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </Modal.Description>
        </Modal.Header>
        {/* invite emails */}
        <div className="py-5 flex items-center flex-wrap gap-2 border-b border-zinc-800">
          {Array.from({ length: 7 }).map((_, i) => {
            return (
              <div
                className="text-zinc-300 inline-flex items-center gap-[0.625rem] px-[0.625rem] py-[0.375rem] bg-zinc-800 rounded-md"
                key={i}
              >
                <span>thiagon@hotmail.com</span>
                <button>
                  <X className="w-4 h-4" />
                </button>
              </div>
            )
          })}
        </div>

        <div className="bg-zinc-950 px-4 py-[0.625rem] mt-5 sm:flex-row sm:items-center flex flex-col gap-[0.625rem]  rounded-lg border border-zinc-800">
          <div className="flex items-center gap-2 sm:border-none sm:pb-0 border-b border-zinc-800 pb-[0.625rem] ">
            <AtSign className="w-5 h-5 text-zinc-400" />
            <input
              type="email"
              className="bg-transparent border-none outline-none"
              placeholder="Digite o e-mail do convidado"
            />
          </div>
          <Button variant="primary">
            Convidar
            <Plus className="w-5 h-5" />
          </Button>
        </div>
        <Modal.Close closeModal={setIsModalOpen} />
      </Modal.Root>
    </div>
  )
}
