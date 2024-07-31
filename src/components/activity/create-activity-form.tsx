'use client'

import { Calendar, Clock, Plus, Tag } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import { Modal } from '../modal'

export function CreateActivityForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="py-3 px-5"
        variant="primary"
      >
        <Plus className="w-5 h-5" />
      </Button>
      <Modal.Root isOpen={isModalOpen}>
        <Modal.Header>
          <Modal.Title>Cadastrar atividade</Modal.Title>
          <Modal.Description>
            Todos os convidados podem visualizar as atividades.
          </Modal.Description>
        </Modal.Header>
        <form className="flex flex-col gap-2 mt-5" action="">
          <div className="py-[0.625rem] px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-[0.625rem]">
            <Tag className="w-5 h-5 text-zinc-400" />
            <input
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Qual a atividade?"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="py-[0.625rem] px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-[0.625rem]">
              <Calendar className="w-5 h-5 text-zinc-400" />
              <input
                className="w-full bg-transparent outline-none"
                type="text"
                value="20 de agosto"
                disabled
              />
            </div>
            <div className="py-[0.625rem] px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-[0.625rem]">
              <Clock className="w-5 h-5 text-zinc-400" />
              <input
                className="w-full bg-transparent outline-none"
                type="text"
                placeholder="Horário"
              />
            </div>
          </div>

          <Button className="mt-1" variant="primary">
            Salvar atividade
          </Button>
        </form>
        <Modal.Close closeModal={setIsModalOpen} />
      </Modal.Root>
    </>
  )
}
