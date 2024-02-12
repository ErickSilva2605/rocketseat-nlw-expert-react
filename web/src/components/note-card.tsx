export function NoteCard() {
  return (
    <button
      className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'
    >
      <span className='text-slate-200 font-medium text-sm'>
        há 2 dias
      </span>
      <p className='text-slate-300 font-medium text-sm leading-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui perspiciatis unde quis excepturi. Dolorum accusantium ut esse perspiciatis, temporibus natus odio, neque sint molestias inventore voluptate saepe nemo assumenda?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui perspiciatis unde quis excepturi. Dolorum accusantium ut esse perspiciatis, temporibus natus odio, neque sint molestias inventore voluptate saepe nemo assumenda?
      </p>

      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </button>
  )
}