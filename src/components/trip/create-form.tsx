'use client'

import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import React, { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import { DatePicker } from '../ui/date-picker'
import { Button } from '../ui/button'
import { InviteParticipants } from './invite-participants'
import { Modal } from '../modal'

export function CreateTripForm() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false)
  const [openInviteParticipants, setOpenInviteParticipants] = useState(false)

  return (
    <form action="" className="w-full flex flex-col  max-w-[720px]  gap-4">
      <div className="text-zinc-100 md:flex-1 flex flex-col md:items-center rounded-xl shadow-shape md:flex-row gap-5 bg-zinc-900  w-full py-[0.875rem] px-4">
        <div className="flex items-center md:flex-1 gap-2">
          <label title="destino" htmlFor="destination">
            <MapPin className="w-5 h-5 text-zinc-400" />
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Para onde você vai?"
            className="bg-transparent  border-none outline-none w-full"
            disabled={openInviteParticipants}
          />
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-zinc-400" />
          <button
            type="button"
            value="Quando?"
            className="bg-transparent flex-1 flex items-start text-zinc-400 border-none outline-none"
            onClick={() => setIsOpenDatePicker(true)}
            disabled={openInviteParticipants}
          >
            Quando?
          </button>
        </div>

        <span className="h-[1px] w-full md:w-[1px] md:h-6 bg-zinc-800" />

        {openInviteParticipants ? (
          <Button
            type="button"
            className="md:max-w-[195px]"
            onClick={() => setOpenInviteParticipants(false)}
            variant="default"
          >
            Alterar local/data
            <Settings2 className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            className="md:max-w-[141px]"
            variant="primary"
            type="button"
            onClick={() => setOpenInviteParticipants(true)}
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </Button>
        )}

        <Modal.Root isOpen={isOpenDatePicker}>
          <Modal.Header>
            <Modal.Title>Duração da viagem</Modal.Title>
          </Modal.Header>

          <DatePicker
            mode="range"
            selected={date}
            onSelect={setDate}
            disabled={{ before: new Date() }}
          />
          <Modal.Close closeModal={setIsOpenDatePicker} />
        </Modal.Root>
      </div>
      {openInviteParticipants && <InviteParticipants />}
    </form>
  )
}
