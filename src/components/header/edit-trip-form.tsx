'use client'

import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Modal } from '../modal'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import { DatePicker } from '../ui/date-picker'

export function EditTripForm() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false)
  const [isFieldDisabled, setIsFieldDisabled] = useState(true)

  return (
    <form
      action=""
      className="flex w-full items-center justify-between gap-x-5 gap-y-4 flex-wrap"
    >
      <div className="flex items-center md:flex-1 gap-2">
        <label title="destino" htmlFor="destination">
          <MapPin className="w-5 h-5 text-zinc-400" />
        </label>
        <input
          type="text"
          name="destination"
          id="destination"
          placeholder="Para onde você vai?"
          className="bg-transparent text-zinc-100 border-none outline-none w-full"
          disabled={isFieldDisabled}
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-zinc-400" />
        <button
          type="button"
          value="Quando?"
          className="bg-transparent flex-1 flex items-start text-zinc-400 border-none outline-none"
          onClick={() => setIsOpenDatePicker(true)}
          disabled={isFieldDisabled}
        >
          Quando?
        </button>
      </div>

      <span className="h-[1px] w-full md:w-[1px] md:h-6 bg-zinc-800" />

      <Button
        type="button"
        className="md:max-w-[195px] w-full"
        variant={isFieldDisabled ? 'default' : 'primary'}
        onClick={() => setIsFieldDisabled(!isFieldDisabled)}
      >
        {isFieldDisabled ? (
          <span>Alterar local/data</span>
        ) : (
          <span>confirmar</span>
        )}
        {isFieldDisabled ? (
          <Settings2 className="w-5 h-5" />
        ) : (
          <ArrowRight className="w-5 h-5" />
        )}
      </Button>

      <Modal.Root className="z-20" isOpen={isOpenDatePicker}>
        <Modal.Header>
          <Modal.Title>Alterar data da viagem</Modal.Title>
        </Modal.Header>

        <DatePicker
          mode="range"
          selected={date}
          onSelect={setDate}
          disabled={{ before: new Date() }}
        />
        <Modal.Close closeModal={setIsOpenDatePicker} />
      </Modal.Root>
    </form>
  )
}
