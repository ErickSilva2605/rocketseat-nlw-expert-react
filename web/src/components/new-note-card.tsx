export function NewNoteCard() {
  return (
    <div className='rounded-md bg-slate-700 p-5 space-y-3'>
      <span className='text-slate-200 font-medium text-sm'>
        Adicionar nota
      </span>
      <p className='text-slate-400 font-medium text-sm leading-6'>
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  )
}