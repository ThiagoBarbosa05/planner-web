'use client'

import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import React, { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import { DatePicker } from '../ui/date-picker'
import { Button } from '../ui/button'
import { InviteParticipants } from './invite-participants'

export function CreateTripForm() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [openInviteParticipants, setOpenInviteParticipants] = useState(false)

  return (
    <form action="" className="w-full flex flex-col gap-4">
      <div className="text-zinc-100 flex flex-col gap-5 bg-zinc-900 rounded-xl w-full py-[0.875rem] px-4">
        <div className="flex items-center gap-2">
          <label title="destino" htmlFor="destination">
            <MapPin className="w-5 h-5 text-zinc-400" />
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Para onde você vai?"
            className="bg-transparent border-none outline-none w-full"
            disabled={openInviteParticipants}
          />
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-zinc-400" />
          <button
            type="button"
            value="Quando?"
            className="bg-transparent flex-1 flex items-start text-zinc-400 border-none outline-none"
            onClick={() => setOpenDatePicker(true)}
            disabled={openInviteParticipants}
          >
            Quando?
          </button>
        </div>

        <span className="h-[1px] w-full bg-zinc-800" />

        {openInviteParticipants ? (
          <Button
            type="button"
            onClick={() => setOpenInviteParticipants(false)}
            variant="default"
          >
            Alterar local/data
            <Settings2 className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            variant="primary"
            type="button"
            onClick={() => setOpenInviteParticipants(true)}
          >
            Continuar
            <ArrowRight className="w-5 h-5" />
          </Button>
        )}

        {openDatePicker && (
          <div className="absolute backdrop-blur-sm flex flex-col px-5 items-center justify-center inset-0 bg-black/70">
            <div
              data-open={openDatePicker}
              className="bg-zinc-900 py-5 px-6 rounded-xl data-[open=true]:animate-in data-[open=false]:animate-out data-[open=true]:fade-in-0 data-[open=false]:fade-out-0 data-[open=true]:zoom-in-95 relative shadow-shape"
            >
              <h4 className="text-lg font-semibold mb-5">Duração da viagem</h4>
              <DatePicker
                mode="range"
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }}
              />
              <button
                className="text-zinc-400 absolute top-5 right-6"
                onClick={() => setOpenDatePicker(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
      {openInviteParticipants && <InviteParticipants />}
    </form>
  )
}
