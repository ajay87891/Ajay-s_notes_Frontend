import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState =(props)=>{
    const host = 'https://emerald-penguin-slip.cyclic.app/'
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial);

      //Get All Notes
      const getNotes = async()=>{
        
        const response = await fetch(`${host}/api/notes/FetchAllNotes`,{
          method: 'GET',
          headers:{
            'auth-token' : localStorage.getItem('token'),
          },
         })
         const json = await response.json();
         setNotes(json)
      }


      //Add Note
      const addNote = async(title, description, tag)=>{
        //Api Call

        const response = await fetch(`${host}/api/notes/AddNotes`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem('token'),


          },
          body: JSON.stringify({title, description, tag})

        })
        const note = await response.json();
        setNotes(notes.concat(note))

      }

      //Delete Note
      const deleteNote = async(id)=>{

        //Api Call
        const response = await fetch(`${host}/api/notes/DeleteNote/${id}`,{
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem('token'),


          }})
        const json = response.json();


        // console.log(`deleting note with id ${id}`);
        let newNote = notes.filter((note)=>{return note._id!== id})
        setNotes(newNote)


      }


      //Edit Note
      const editNote = async(id, description, title, tag)=>{
        //Api Call

        const response = await fetch(`${host}/api/notes/updateNote/${id}`,{
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json',
            'auth-token' : localStorage.getItem('token'),


          },
          body: JSON.stringify({title, description, tag})

        })
        const json = response.json();

        // api done
        let updatedNote = JSON.parse(JSON.stringify(notes))

        for(let i=0; i < notes.length; i++) {
          const element = updatedNote[i];
          if(element._id === id){
            updatedNote[i].title = title;
            updatedNote[i].description = description;
            updatedNote[i].tag = tag;
            break;
          }
        }
        setNotes(updatedNote)

      }

    
    
    return(
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote, getNotes }}>
           {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;