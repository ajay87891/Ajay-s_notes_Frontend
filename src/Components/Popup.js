import React from 'react'
import ExitIcon from "../icons/ExitIcon.svg"
import HoverExit from "../icons/HoverExit.svg"

function Popup(props) {
  return (props.trigger)?(

    <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/10 backdrop-blur-sm z-30 ease-out duration-200' onClick={()=>{
        props.state(false)
    }} >
        <div className='relative w-4/5 h-[80vh] bg-gradient-to-tr from-purple-200 via-orange-200 to-pink-200 dark:from-slate-600 dark:via-slate-700 dark:to-slate-600 rounded-3xl ease-out duration-200 animate-dropTop' onClick={(e)=>{
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
