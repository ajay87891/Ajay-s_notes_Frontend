import React, { useContext, useState } from 'react'
import Popup from './Popup'
import noteContext from '../Context/notes/noteContext';
import NoteItem from './NoteItem'
import AddNote from './AddNote';
import AddNoteCard from './AddNoteCard';

function Notes() {

    const context = useContext(noteContext);
    const {notes} = context;
    const [trigger, settrigger] = useState(false);
    const [triggerNewNote, settriggerNewNote] = useState(false);
    const [ id, setId] = useState({
        title: "",
        id: "",
        description: "",
        tag: ""
    });

  return (
    <>
    <h2 className='text-4xl text-slate-700 mx-auto dark:text-slate-200'>Your Notes</h2>
    <Popup trigger={trigger} state={settrigger}>
        <div className='flex justify-center items-start mt-3'>
        <h1 className='text-4xl text-slate-800 '>{id.title}</h1>
        </div>
        <hr />
        <p>{id.description}</p>
    </Popup>
    
    <Popup trigger={triggerNewNote} state={settriggerNewNote}>
        

        <AddNote state={settriggerNewNote} />
        

        </Popup>


        
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2'>
        <AddNoteCard settrigger={settriggerNewNote}/>
        
        

    {notes.map((note)=>{
        
    return <NoteItem key={note._id} note={note} setId={setId} settrigger={settrigger}/>
         })}
    </div>
  </>
  )
}

export default Notes
