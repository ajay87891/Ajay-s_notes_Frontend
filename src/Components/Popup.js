import React from 'react'
import ExitIcon from "../icons/ExitIcon.svg"
import HoverExit from "../icons/HoverExit.svg"

function Popup(props) {
  return (props.trigger)?(

    <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/20  z-30 ease-out duration-200' onClick={()=>{
        props.state(false)
    }} >
        <div className='relative w-4/5 h-[75vh] md:h-[85vh] bg-white/30 dark:bg-slate-900/10 backdrop-blur-md rounded-3xl ease-out duration-200 animate-dropTop shadow-lg overflow-y-scroll scrollbar-hide border-slate-900/80 border' onClick={(e)=>{
            e.stopPropagation()
        }}>
            
            <button className='group' onClick={()=>{
                props.state(false)
            }}>
                <span className='w-8 top-0 right-5 absolute'>
                <img src={ExitIcon} className=" group-hover:hidden" alt="Exit"/>
                <img src={HoverExit} alt="" className=' hidden group-hover:block' />
            
                </span>
            </button>
            
            {props.children}
        </div>
      
    </div>
  ):"";
}

export default Popup
