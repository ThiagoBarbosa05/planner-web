'use client'

import { ArrowRight, Calendar, MapPin, X } from 'lucide-react'
import React, { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import { DatePicker } from '../ui/date-picker'

export function CreateTripForm() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false)

  return (
    <form
      action=""
      className="text-zinc-100 flex flex-col gap-5 bg-zinc-900 rounded-xl w-full py-[0.875rem] px-4"
    >
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
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-zinc-400" />
        <button
          type="button"
          value="Quando?"
          className="bg-transparent flex-1 flex items-start text-zinc-400 border-none outline-none"
          onClick={() => setOpenDatePicker(true)}
        >
          Quando?
        </button>
      </div>

      <span className="h-[1px] w-full bg-zinc-800" />

      <button
        type="submit"
        className="text-lime-950 leading-none font-medium h-9 w-full flex items-center gap-2 justify-center bg-lime-300 rounded-lg"
      >
        Continuar
        <ArrowRight className="w-5 h-5" />
      </button>

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
    </form>
  )
}
