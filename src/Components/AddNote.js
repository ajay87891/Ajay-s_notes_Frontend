import React, { useContext, useState } from 'react';
import noteContext from '../Context/notes/noteContext'

function AddNote(props) {
  const context = useContext(noteContext);
  const {addNote} = context;
 
  const [note, setnote] = useState({title:"", description:"", tag:"default"});
  const [titleval, settitleval] = useState(note.title.length)
  const [descval, setdescval] = useState(note.title.length)
  const onChange = (e)=>{

    if(e.target.name === 'title' && note.title.length<30)
    {
      settitleval(note.title.length+1)
      setnote({...note,[e.target.name]: e.target.value})
      
    }
    
    if(e.target.name === 'description' && note.description.length<500)
    {
      setdescval(note.description.length+1)
      setnote({...note,[e.target.name]: e.target.value})
    }

    

  }
  const handelClick =(e)=>{
    e.preventDefault()
    addNote(note.title, note.description, note.tag);
    props.state(false)
      
  }


  return (
    

    <div className='p-9 '>
        
        <form>
  <div className="mb-6 flex flex-col">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" className={`bg-gray-50/50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${titleval < 5 ? 'focus:ring-red-500 focus:border-red-500':'focus:ring-blue-500 focus:border-blue-500' }`} onChange={onChange} placeholder="Title...." name='title'  required/>
    <p className={`self-end ${titleval < 5 ? 'text-red-600':'text-slate-800' } italic font-bold`}>{titleval}/30</p>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
    <input type="text" className={`bg-gray-50/50 border border-gray-300 text-gray-900 text-sm rounded-lg $ block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} onChange={onChange} placeholder="Tag...." name='tag'/>
  </div>
  <div className="mb-6 flex flex-col">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea id="message" rows="4" className={`block p-2.5 w-full h-48 md:h-full text-sm text-gray-900 bg-gray-50/50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  ${descval < 5 ? 'focus:ring-red-500 focus:border-red-500':'focus:ring-blue-500 focus:border-blue-500'}`} placeholder="Write your thoughts here..." name='description' onChange={onChange} required></textarea>
    <p className={`self-end ${descval < 5 ? 'text-red-600':'text-slate-800 dark:text-slate-200' } after:content-['/500'] after:text-slate-800 after:dark:text-slate-200 italic font-bold`}>{descval}</p>
    
  </div>
  
  <button type="submit" disabled={note.title.length<5 || note.description.length <5} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handelClick}>Add Note</button>
</form>
      
    </div>
  )
}

export default AddNote
