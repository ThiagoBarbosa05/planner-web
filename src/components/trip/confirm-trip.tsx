'use client'

import { ArrowRight, Mail, User } from 'lucide-react'
import { Button } from '../ui/button'
import { Modal } from '../modal'
import { useState } from 'react'

export function ConfirmTrip() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <Button
        type="button"
        onClick={() => setIsModalOpen(true)}
        variant="primary"
        className="w-full"
      >
        Confirmar viagem
        <ArrowRight className="w-5 h-5" />
      </Button>

      <Modal.Root className="max-w-[540px]" isOpen={isModalOpen}>
        <Modal.Header>
          <Modal.Title>Confirmar criação da viagem</Modal.Title>
          <Modal.Description>
            Para concluir a criação da viagem para{' '}
            <strong className="text-zinc-100">Florianópolis, Brasil</strong> nas
            datas de{' '}
            <strong className="text-zinc-100">16 a 27 de Agosto de 2024</strong>{' '}
            preencha seus dados abaixo:
          </Modal.Description>
        </Modal.Header>

        <div className="bg-zinc-950 mt-5 mb-2 border border-zinc-800 rounded-lg py-[0.625rem] px-4 flex items-center gap-[0.625rem]">
          <User className="w-5 h-5 text-zinc-400" />
          <input
            className="bg-transparent w-full border-none outline-none"
            type="text"
            name="ownerName"
            placeholder="Seu nome completo"
          />
        </div>
        <div className="bg-zinc-950 border border-zinc-800 rounded-lg py-[0.625rem] px-4 flex items-center gap-[0.625rem]">
          <Mail className="w-5 h-5 text-zinc-400" />
          <input
            className="bg-transparent w-full border-none outline-none"
            type="email"
            name="ownerEmail"
            placeholder="Seu e-mail"
          />
        </div>

        <Button
          type="submit"
          className="mt-3 w-full"
          onClick={() => setIsModalOpen(false)}
          variant="primary"
        >
          Confirmar criação da viagem
        </Button>
        <Modal.Close closeModal={setIsModalOpen} />
      </Modal.Root>
    </div>
  )
}
