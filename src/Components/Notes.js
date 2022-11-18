import React, { useContext, useState } from 'react'
import Popup from './Popup'
import noteContext from '../Context/notes/noteContext';
import NoteItem from './NoteItem'

function Notes() {

    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    const [trigger, settrigger] = useState(false);
    const [ id, setId] = useState({
        title: "",
        id: "",
        decription:"",
        tag:""
    });

  return (
    <>
    <h2 className='text-4xl text-slate-700'>Your Notes</h2>
    <Popup trigger={trigger} state={settrigger}>
        <h1>{id.title}</h1>
        <p>{id.decription}</p>
        

        </Popup>

    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2'>
        

    {notes.map((note)=>{
        
    return <NoteItem key={note._id} note={note} setId={setId} settrigger={settrigger}/>
         })}
    </div>
  </>
  )
}

export default Notes
