'use client'

import { X } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

interface CloseProps {
  closeModal: Dispatch<SetStateAction<boolean>>
}

export function Close({ closeModal }: CloseProps) {
  return (
    <button
      type="button"
      onClick={() => closeModal(false)}
      className="text-zinc-400 absolute top-5 right-6"
    >
      <X className="w-5 h-5" />
    </button>
  )
}
