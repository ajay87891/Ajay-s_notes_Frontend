import React, {useContext, useState} from 'react'
import noteContext from '../Context/notes/noteContext';

function UpdateNote(props) {
    const context = useContext(noteContext);
  const {editNote} = context;
  const [note, setnote] = useState({title:props.id.title, description: props.id.description, tag:"default", id:props.id.id});
  const onChange = (e)=>{
    setnote({...note,[e.target.name]: e.target.value})

  }
  const handelClick =(e)=>{
    e.preventDefault()
    editNote(note.id, note.description, note.title, note.tag)
    props.state(false)
      
  }


  return (
    

    <div className='p-9'>
        
        <form>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} placeholder="Title...." name='title' value={note.title}  required/>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} placeholder="Tag...." name='tag' value={note.tag} />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea id="message" rows="4" className="block p-2.5 w-full h-48 md:h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."  value={note.description} name='description' onChange={onChange} required></textarea>
    
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handelClick}>Update Note</button>
</form>
      
    </div>
  )
}

export default UpdateNote