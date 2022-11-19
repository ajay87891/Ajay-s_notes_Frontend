import React from 'react'

function ShowNote(props) {
  return (
    <div className='mx-6 relative'>
        <h1 className='text-2xl text-slate-800 dark:text-slate-200 fonst-bold font-serif px-auto'>{props.id.title}</h1>
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"/>

        <p className='text-slate-800 dark:text-slate-300 overflow-scroll break-words scrollbar-hide'>{props.id.description}</p>
        <p className='text-slate-800 dark:text-slate-300 italic text-sm absolute '>{props.id.tag}</p>
      
    </div>
  )
}

export default ShowNote
