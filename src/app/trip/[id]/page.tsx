import { Activity } from '@/components/activity'
import { Header } from '@/components/header'
import { Links } from '@/components/link'
import { ManageParticipants } from '@/components/manage-participants'

export default function Page() {
  return (
    <div className="px-4 flex-1 flex max-w-[1280px] mx-auto w-full flex-col text-zinc-100 pt-4 ">
      <Header />
      <main className="md:flex w-full md:flex-1 md:gap-5 lg:gap-16 md:items-start">
        <Activity />

        <span className="w-full md:hidden h-[1px] bg-zinc-800 mt-6 mb-6 block" />

        <section className="sm:grid md:max-w-[320px]  md:grid-cols-1 sm:grid-cols-2 sm:gap-5">
          <Links />
          <ManageParticipants />
        </section>
      </main>
    </div>
  )
}
