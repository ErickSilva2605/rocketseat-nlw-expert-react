import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
  return (
    <div className='mx-auto max-w-6xl py-12 space-y-6'>
      <img src={logo} alt="Nlw Expert" />

      <form className='w-full'>
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />
        <NoteCard note={{ date: new Date(), content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem accusamus tempora, perferendis id ducimus molestias debitis laudantium possimus enim iure iusto voluptas. Cupiditate similique laborum maxime obcaecati, tenetur ullam.' }} />
        <NoteCard note={{ date: new Date(), content: 'Lorem ipsum dolor' }} />
      </div>
    </div>
  )
}
