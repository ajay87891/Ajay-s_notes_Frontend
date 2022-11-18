import React from 'react'
import ExitIcon from "../icons/ExitIcon.svg"
import HoverExit from "../icons/HoverExit.svg"

function Popup(props) {
  return (props.trigger)?(

    <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/10 backdrop-blur-sm z-30 ease-out duration-200'>
        <div className='relative w-4/5 h-[80vh] bg-slate-100/90 rounded ease-out duration-200 animate-dropTop' onClick={(e)=>{
            e.stopPropagation()
        }}>
            <div className='flex flex-row-reverse'>
            <button className='group' onClick={()=>{
                props.state(false)
            }}>
                <span className='w-10 mr-14 mt-3'>
                <img src={ExitIcon} className="inline group-[hover]:hidden" alt="Exit"/>
                <img src={HoverExit} alt="" className=' hidden group-[hover]:inline' />
            
                </span>
            </button>
            </div>
            {props.children}
        </div>
      
    </div>
  ):"";
}

export default Popup
