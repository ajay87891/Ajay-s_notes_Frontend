import React from 'react'
import plusLight from '../icons/plusLight.svg'
import plusDark from '../icons/plusDark.svg'
import { useTranslation } from "react-i18next";

function AddNoteCard(props) {
  const {t} = useTranslation();
    const handelclick = ()=>{
        props.settrigger(true)
    }
    
  return (
    <div className='mx-4 my-2 max-w-sm  p-6'>
        
        <button onClick={handelclick} className="block max-w-sm p-6 bg-white/30 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800/40 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{t("note.6")}</h5>
    <span >
        <img src={plusLight} alt="Add" className='dark:hidden h-8 mx-auto' />
        <img src={plusDark} alt="Add" className='hidden dark:block h-8 mx-auto'/>
    </span>
</button>
</div>
      
   
  )
}

export default AddNoteCard
