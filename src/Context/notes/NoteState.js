import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState =(props)=>{
    const host = 'http://localhost:5000'
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial);

      //Get All Notes
      const getNotes = async()=>{
        
        const response = await fetch(`${host}/api/notes/FetchAllNotes`,{
          method: 'GET',
          headers:{
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3NWU0NjFmYjQwZjk3NDY1ZGUwNWM4In0sImlhdCI6MTY2ODY3MDU4NX0.OMDbSw8Gx62JtnxpDGW4cRFL2hXnUEkELz5iNQlBUPY',
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
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3NWU0NjFmYjQwZjk3NDY1ZGUwNWM4In0sImlhdCI6MTY2ODY3MDU4NX0.OMDbSw8Gx62JtnxpDGW4cRFL2hXnUEkELz5iNQlBUPY',


          },
          body: JSON.stringify({title, description, tag})

        })
        const json = response.json();
        console.log(json);


        let note = {
          "_id": "637736c2ff58wr9ef2a1e4d",
          "user": "6375e461fb40f97465de05c8",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-11-18T07:39:46.744Z",
          "__v": 0
        };
        setNotes(notes.concat(note))

      }

      //Delete Note
      const deleteNote = async(id)=>{

        //Api Call
        const response = await fetch(`${host}/api/notes/DeleteNote/${id}`,{
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json',
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3NWU0NjFmYjQwZjk3NDY1ZGUwNWM4In0sImlhdCI6MTY2ODY3MDU4NX0.OMDbSw8Gx62JtnxpDGW4cRFL2hXnUEkELz5iNQlBUPY',


          }})
        const json = response.json();


        console.log(`deleting note with id ${id}`);
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
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3NWU0NjFmYjQwZjk3NDY1ZGUwNWM4In0sImlhdCI6MTY2ODY3MDU4NX0.OMDbSw8Gx62JtnxpDGW4cRFL2hXnUEkELz5iNQlBUPY',


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