import React, { useContext, useEffect, useState } from 'react'
import Popup from './Popup'
import noteContext from '../Context/notes/noteContext';
import NoteItem from './NoteItem'
import AddNote from './AddNote';
import AddNoteCard from './AddNoteCard';
import UpdateNote from './UpdateNote';
import ShowNote from './ShowNote';
import { useNavigate } from 'react-router-dom';
import Profile from "./Profile";

function Notes() {

    const context = useContext(noteContext);
    let navigate = useNavigate();
    const {notes, getNotes} = context;
    const [trigger, settrigger] = useState(false);
    const [triggerShow, settriggerShow] = useState(false);
    const [triggerNewNote, settriggerNewNote] = useState(false);
    const [ id, setId] = useState({
        title: "",
        id: "",
        description: "",
        tag: ""
    });
    useEffect(() => {
      if(localStorage.getItem('token'))
      {
        getNotes();
      }
      else{
        navigate("/login")
      }
       
    }, []);

  return (

    <>
     <div className='flex justify-center items-center pt-14' >
     <div className="absolute right-3 top-36 sm:top-24 w-44 max-h-28">
        <Profile/>
      

      </div>
      <div className='w-10/12 mt-10'>
    <h2 className='text-4xl text-slate-700 mx-auto mt-10 sm:mt-0 dark:text-slate-200'>Your Notes</h2>
    <Popup trigger={trigger} state={settrigger}>
       <UpdateNote id={id} state={settrigger}/>
    </Popup>
    
    <Popup trigger={triggerNewNote} state={settriggerNewNote}>
       <AddNote state={settriggerNewNote} />
    </Popup>
    <Popup trigger={triggerShow} state={settriggerShow}>
       <ShowNote state={settriggerShow} id={id}/>


    </Popup>


        
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5'>
        <AddNoteCard settrigger={settriggerNewNote}/>
        
        

    {notes.map((note)=>{
        
    return <NoteItem key={note._id} note={note} setId={setId} settrigger={settrigger} settriggerShow={settriggerShow}/>
         })}
    </div>
    </div></div>
  </>
  )
}

export default Notes
