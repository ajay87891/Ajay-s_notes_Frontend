import AlertContext from './AlertContext';
import { useState } from 'react';

const AlertState = (props) => {
  const [alert, setAlert] = useState({ msg: "",
    type: "",visi:"invisible"});
  const showAlert = (message, type, visiblity)=>{
    setAlert({
      visi: visiblity,
      msg: message,
      type: type,
      
    })
    setTimeout(() => {
      setAlert({visi:"invisible"});
    }, 1500);
  }



  return (
    <AlertContext.Provider value = {{alert, showAlert }}>
           {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;
