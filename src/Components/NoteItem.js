import React, {useContext} from 'react'
import delIcon from '../icons/Delete.svg'
import delIconWhite from '../icons/DeleteWhite.svg'
import editIcon from '../icons/EditLight.png'
import editIconDark from '../icons/EditDark.png'
import noteContext from '../Context/notes/noteContext'
import AlertContext from '../Context/alert/AlertContext';




function NoteItem(props) {
  const context1 = useContext(AlertContext);
    const {showAlert} = context1;
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const handelView = ()=>{
    props.setId({
      id: props.note._id,
      title: props.note.title,
      description: props.note.description,
      tag: props.note.tag
  })
  props.settriggerShow(true)

  }
  const handelUpdate = ()=>{
        props.setId({
            id: props.note._id,
            title: props.note.title,
            description: props.note.description,
            tag: props.note.tag
        })
        props.settrigger(true)
    }
   
  return (
    <div  className="  mx-4 my-2 block max-w-sm p-6 bg-white/30 border border-gray-200/30 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800/40 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className=" cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-words" onClick={handelView}>{props.note.title}</h5>
   
    <p className="font-normal text-gray-700 dark:text-gray-400 cursor-pointer break-words" onClick={handelView}>{(props.note.description.length<= 60)?props.note.description:props.note.description.slice(0,60)+"...."}</p>
    <p className='text-slate-800 text-sm italic font-serif bg-red-600/30 dark:text-slate-400  rounded-2xl inline p-1'>{props.note.tag}</p>
    <div className='flex flex-row-reverse'>
        <span className='cursor-pointer' onClick={()=>{
          deleteNote(props.note._id)
          showAlert("Note Deleted", "Success", "visible")
        }}>
    <img src={delIcon} alt="Delete" className="h-5 mx-2 mt-3 dark:hidden" />
    <img src={delIconWhite} alt="Delete" className="h-5 mx-2 mt-3  hidden dark:inline" /></span>
    <span className='cursor-pointer' onClick={handelUpdate}>
    <img src={editIcon} alt="Edit" className="h-5 mx-2 mt-3  dark:hidden" />
    <img src={editIconDark} alt="Edit" className="h-5 mx-2 hidden mt-3 dark:inline" />
    </span>
    
    
    </div>
</div>
  )
}

export default NoteItem
