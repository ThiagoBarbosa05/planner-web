'use client'

import { Link2, Plus, Tag } from 'lucide-react'
import { Button } from '../ui/button'
import { Modal } from '../modal'
import { useState } from 'react'

export function CreateLinkForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="font-medium"
        variant="default"
      >
        <Plus className="w-5 h-5" />
        Cadastrar novo link
      </Button>
      <Modal.Root isOpen={isModalOpen}>
        <Modal.Header>
          <Modal.Title>Cadastrar link</Modal.Title>
          <Modal.Description>
            Todos os convidados podem visualizar os links importantes.
          </Modal.Description>
        </Modal.Header>
        <form className="flex flex-col gap-2 mt-5" action="">
          <div className="py-[0.625rem] px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-[0.625rem]">
            <Tag className="w-5 h-5 text-zinc-400" />
            <input
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Título do link"
            />
          </div>

          <div className="py-[0.625rem] px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-[0.625rem]">
            <Link2 className="w-5 h-5 text-zinc-400" />
            <input
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="URL"
            />
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
