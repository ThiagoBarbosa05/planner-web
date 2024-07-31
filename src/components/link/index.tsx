import { Link2 } from 'lucide-react'
import Link from 'next/link'
import { CreateLinkForm } from './create-link-form'

export function Links() {
  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-lg leading-none font-semibold">Links importantes</h3>
      <Link className="flex items-center gap-3 justify-between" href="/">
        <div className="overflow-hidden">
          <span className="text-zinc-100 font-medium block pb-[0.375rem]">
            Reserva do AirBnB
          </span>
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-zinc-400 text-xs">
            https://www.airbnb.com.br/rooms/1047000dadwar345353425fwe243252352
          </p>
        </div>
        <Link2 className="w-5 h-5 text-zinc-400" />
      </Link>

      <CreateLinkForm />
    </section>
  )
}
