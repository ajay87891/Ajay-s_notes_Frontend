import React from 'react'

function Profile(props) {
  const {email, firstname, lastname} = props.user
    
  return (
    <div>
      
<div className="w-full px-2 pt-2 max-w-sm bg-white/20 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    
    <div className="flex flex-col items-center ">
        <img className="w-10 h-10 sm:w-16 sm:h-16 mb-3 rounded-full shadow-lg" src={`https://ui-avatars.com/api/?name=${firstname}+${lastname}`} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white break-words">{firstname} {lastname} </h5>
       <p className="text-sm text-gray-500 dark:text-gray-400 break-words">{email}</p>
       
    </div>
</div>

    </div>
  )
}

export default Profile
