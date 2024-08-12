'use client'

import { AtSign, Plus, X } from 'lucide-react'
import { Button } from '../ui/button'
import { Modal } from '../modal'
import { Dispatch, SetStateAction, useState } from 'react'

interface InviteParticipantsFormProps {
  isOpen: boolean
  closeModal: Dispatch<SetStateAction<boolean>>
  setEmailsToInvite: Dispatch<SetStateAction<string[]>>
  emails: string[]
}

export function InviteParticipantsForm({
  isOpen,
  closeModal,
  setEmailsToInvite,
  emails,
}: InviteParticipantsFormProps) {
  const [emailValue, setEmailValue] = useState('')
  const [guestAlreadyExists, setGuestAlreadyExists] = useState('')
  const [invalidEmail, setInvalidEmail] = useState('')

  function handleSubmitEmailsToInvite() {
    if (emails.includes(emailValue)) {
      setGuestAlreadyExists('E-mail do convidado já está registrado.')
      return
    }

    const invalidEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!invalidEmailRegex.test(emailValue)) {
      setInvalidEmail('E-mail Inválido')
      return
    }

    setEmailsToInvite((state) => [...state, emailValue])
    setEmailValue('')
    setGuestAlreadyExists('')
    setInvalidEmail('')
  }

  return (
    <Modal.Root isOpen={isOpen}>
      <Modal.Header>
        <Modal.Title>Selecionar Convidados</Modal.Title>
        <Modal.Description>
          Os convidados irão receber e-mails para confirmar a participação na
          viagem.
        </Modal.Description>
      </Modal.Header>
      {/* invite emails */}
      <div className="py-5 flex items-center flex-wrap gap-2 border-b border-zinc-800">
        {emails?.map((email, i) => {
          return (
            <div
              className="text-zinc-300 inline-flex items-center gap-[0.625rem] px-[0.625rem] py-[0.375rem] bg-zinc-800 rounded-md"
              key={i}
            >
              <span>{email}</span>
              <button>
                <X className="w-4 h-4" />
              </button>
            </div>
          )
        })}
      </div>

      <div className="bg-zinc-950 px-4 py-[0.625rem] mt-5 sm:flex-row sm:items-center flex flex-col gap-[0.625rem]  rounded-lg border border-zinc-800">
        <div className="flex items-center gap-2 flex-1 sm:border-none sm:pb-0 border-b border-zinc-800 pb-[0.625rem] ">
          <AtSign className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            name="email"
            className="bg-transparent text-zinc-100 w-full border-none outline-none"
            placeholder="Digite o e-mail do convidado"
            value={emailValue}
            onChange={(event) => setEmailValue(event.currentTarget.value)}
          />
        </div>
        <Button
          variant="primary"
          type="button"
          onClick={handleSubmitEmailsToInvite}
          className="px-5"
        >
          Convidar
          <Plus className="w-5 h-5" />
        </Button>
      </div>
      {guestAlreadyExists && (
        <span className="text-xs block text-center mt-2 text-lime-300">
          {guestAlreadyExists}
        </span>
      )}
      {invalidEmail && (
        <span className="text-xs block text-center mt-2 text-lime-300">
          {invalidEmail}
        </span>
      )}
      <Modal.Close closeModal={closeModal} />
    </Modal.Root>
  )
}
