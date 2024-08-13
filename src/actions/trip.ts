'use server'

import { z } from 'zod'
import { ActionsResponse, FormState } from './error-handler'
import { isEqual } from 'date-fns'
import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export type TripDuration = {
  from: Date
  to: Date
}

export type DurationAndEmailsToInviteField = {
  duration: TripDuration
  emailsToInvite: string[]
}

const createTripSchema = z.object({
  destination: z
    .string()
    .min(2, { message: 'Por favor insira um destino válido' }),
  duration: z.object({
    from: z.date(),
    to: z.date(),
  }),
  ownerEmail: z.string().email({ message: 'Por favor insira seu e-mail' }),
  ownerName: z.string().min(2, { message: 'Por favor insira seu nome' }),
  emailsToInvite: z
    .array(z.string().email())
    .min(1, { message: 'Por favor insira pelo menos um participante' }),
})
export async function createTrip(
  { duration, emailsToInvite }: DurationAndEmailsToInviteField,
  formState: FormState,
  formData: FormData,
) {
  let tripIdFromResponse: string

  try {
    const tripStartsAt = duration.from
    const tripEndsAt = duration.to

    const isTripStartsAtEndsAtEqual = isEqual(tripStartsAt, tripEndsAt)

    if (isTripStartsAtEndsAtEqual) {
      throw new Error('A data de início e fim da viagem devem ser diferentes.')
    }

    const trip = createTripSchema.parse({
      destination: formData.get('destination'),
      duration: {
        from: duration.from,
        to: duration.to,
      },
      ownerEmail: formData.get('ownerEmail'),
      ownerName: formData.get('ownerName'),
      emailsToInvite,
    })

    const response = await fetch('http://localhost:8080/trip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ownerName: trip.ownerName,
        ownerEmail: trip.ownerEmail,
        emailsToInvite: trip.emailsToInvite,
        destination: trip.destination,
        isConfirmed: true,
        startsAt: duration.from.toISOString(),
        endsAt: duration.to.toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error('Ocorreu um erro ao tentar criar a viagem.')
    }

    const tripId = await response.json()

    tripIdFromResponse = tripId.id
  } catch (err) {
    return ActionsResponse.onError({ err, status: 'ERROR' })
  }

  revalidateTag(`/trip/${tripIdFromResponse}`)
  redirect(`/trip/${tripIdFromResponse}`)
}
