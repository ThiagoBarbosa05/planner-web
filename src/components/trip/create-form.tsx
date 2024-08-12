'use client'

import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays, format } from 'date-fns'
import { DatePicker } from '../ui/date-picker'
import { Button } from '../ui/button'
import { InviteParticipants } from './invite-participants'
import { Modal } from '../modal'
import { createTrip, TripDuration } from '@/actions/trip'
import { useFormState } from 'react-dom'
import { ptBR } from 'date-fns/locale'
import { InviteParticipantsForm } from './invite-participants-form'
import { EMPTY_FORM_STATE } from '@/actions/error-handler'
import { toast } from 'sonner'

export function CreateTripForm() {
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false)
  const [openInviteParticipants, setOpenInviteParticipants] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  })

  const tripDuration =
    date && date.from && date.to
      ? format(date.from, "d' de 'LLL", { locale: ptBR })
          .concat(' - ')
          .concat(format(date.to, "d' de 'LLL", { locale: ptBR }))
      : null

  const [formState, action] = useFormState(
    createTrip.bind(null, {
      duration: date as TripDuration,
      emailsToInvite,
    }),
    EMPTY_FORM_STATE,
  )

  const [isInviteParticipantsModalOpen, setIsInviteParticipantsModalOpen] =
    useState(false)

  useEffect(() => {
    if (formState.status === 'ERROR') {
      Object.keys(formState.fieldErrors).forEach((field) => {
        toast.error(`${formState.fieldErrors[field]}`, {
          duration: Infinity,
          cancel: {
            label: 'Fechar',
            onClick: () => {},
          },
        })
      })
    }
  }, [formState.fieldErrors, formState.status])

  return (
    <form
      action={action}
      className="w-full flex flex-col  max-w-[720px]  gap-4"
    >
      <div className="text-zinc-100 md:flex-1 flex flex-col gap-5 md:items-center rounded-xl shadow-shape md:flex-row  bg-zinc-900  w-full py-[0.875rem] px-4">
        <div className="flex items-center md:flex-1 gap-2">
          <label title="destino" htmlFor="destination">
            <MapPin className="w-5 h-5 text-zinc-400" />
          </label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="Para onde você vai?"
            className="bg-transparent border-none outline-none w-full"
            readOnly={openInviteParticipants}
          />
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-zinc-400" />
          <button
            type="button"
            className="bg-transparent flex-1 flex items-start text-zinc-400 border-none outline-none"
            onClick={() => setIsOpenDatePicker(true)}
            disabled={openInviteParticipants}
          >
            {!date?.from || !date?.to ? (
              'Quando?'
            ) : (
              <span className="text-zinc-100">{tripDuration}</span>
            )}
          </button>
        </div>

        <span className="h-[1px] w-full md:w-[1px] md:h-6 bg-zinc-800" />

        {openInviteParticipants ? (
          <Button
            type="button"
            className="md:max-w-[195px] w-full"
            onClick={() => setOpenInviteParticipants(false)}
            variant="default"
          >
            Alterar local/data
            <Settings2 className="w-5 h-5" />
          </Button>
        ) : (
          <Button
            className="md:max-w-[141px] w-full"
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
      {openInviteParticipants && (
        <InviteParticipants
          setIsInviteParticipantsModalOpen={setIsInviteParticipantsModalOpen}
          emails={emailsToInvite}
        />
      )}

      <InviteParticipantsForm
        isOpen={isInviteParticipantsModalOpen}
        closeModal={setIsInviteParticipantsModalOpen}
        setEmailsToInvite={setEmailsToInvite}
        emails={emailsToInvite}
      />
      {/* <ConfirmTrip /> */}
    </form>
  )
}
