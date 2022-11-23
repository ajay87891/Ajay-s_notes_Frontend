import AlertContext from './AlertContext';
import { useState } from 'react';

const AlertState = (props) => {
  const [alert, setAlert] = useState({ msg: "",
    type: "",visi:"invisible"});
  const showAlert = (message, type, visiblity)=>{
    setAlert({
      msg: message,
      type: type,
      visi: visiblity
    })
    setTimeout(() => {
      setAlert({visi:"invisible", msg: "",
      type: "",});
    }, 1500);
  }



  return (
    <AlertContext.Provider value = {{alert, showAlert }}>
           {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;
