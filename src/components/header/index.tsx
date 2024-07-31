import { EditTripForm } from './edit-trip-form'

export function Header() {
  return (
    <header className="rounded-xl mb-8 pl-6 py-4 pr-4 bg-zinc-900 shadow-shape flex items-center">
      <EditTripForm />
    </header>
  )
}
