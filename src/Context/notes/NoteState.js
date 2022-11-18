import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState =(props)=>{
    const notesInitial = [
        {
          "_id": "6375fe78c0d5f3ccadffc1",
          "user": "6375e461fb40f97465de05c8",
          "title": "Hello1",
          "description": "This Is new ffNote",
          "tag": "tag",
          "date": "2022-11-17T09:27:20.710Z",
          "__v": 0
        },
        {
          "_id": "637736b7ff583c39ef2e49",
          "user": "6375e461fb40f97465de05c8",
          "title": "Hello1rf",
          "description": "This Is new ffNote",
          "tag": "tag",
          "date": "2022-11-18T07:39:35.438Z",
          "__v": 0
        },
        {
          "_id": "637736bcff583c39ef24b",
          "user": "6375e461fb40f97465de05c8",
          "title": "Helloeg1rf",
          "description": "This Is fer ffNote",
          "tag": "tag",
          "date": "2022-11-18T07:39:40.806Z",
          "__v": 0
        },
        {
          "_id": "637736c2ff583c39ef2a1e4d",
          "user": "6375e461fb40f97465de05c8",
          "title": "Hellvdvoeg1rf",
          "description": "Thisdvd Is fer ffNote",
          "tag": "tag",
          "date": "2022-11-18T07:39:46.744Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial);


      //Add Note
      const addNote = (title, description, tag)=>{
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
      const deleteNote = ()=>{

      }


      //Edit Note
      const editNote = ()=>{

      }

    
    
    return(
        <NoteContext.Provider value = {{notes, addNote, deleteNote, editNote }}>
           {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;