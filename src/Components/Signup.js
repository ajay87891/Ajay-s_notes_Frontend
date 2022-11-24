import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import AlertContext from "../Context/alert/AlertContext";
import { useTranslation } from "react-i18next";
const Signup = () => {
  const {t} = useTranslation();
  const context = useContext(AlertContext);
  const {showAlert} = context;
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({firstname:"", lastname:"", email: "", password: "",PhoneNumber:undefined});
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      console.log(credentials);
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        // console.log(json.authToken); //Redirect from here
        showAlert("SignUp Successful", "Success", "visible");
        navigate('/')

      } else {
        
        showAlert(json.errors[0].msg, "Error", "visible");
        
      }
    } catch (error) {
        if(error.message === 'Failed to fetch'){
            showAlert("Unable to reach Server", "Error", "visible")
        }

        
        console.log( error.message);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className='flex justify-center items-center mt-1' >
      <div className=' items-center justify-center flex'>
<form onSubmit={handelSubmit}>
  <div className='bg-white/25 border border-gray-200 rounded-lg shadow-md p-4 sm:p-6 md:p-11 dark:bg-gray-800/25 dark:border-gray-700 w-80  md:w-[420px]'>
    <h1 className='mb-5 text-xl font-medium text-gray-900 dark:text-white'>{t("signup.1")}</h1>
  <div className="relative z-0 mb-6 w-full group">
      <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={onChange} required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("signup.2")}</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={onChange} required />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("signup.3")}</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("signup.4")}</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="firstname" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={onChange} required />
        <label htmlFor="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("signup.5")}</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input type="text" name="lastname" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={onChange} required />
        <label htmlFor="lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("signup.6")}</label>
    </div>
  </div>
  
    <div className="relative z-0 mb-6 w-full group">
        <input type="tel" pattern="[0-9]{10}" name="PhoneNumber" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={onChange} required />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("signup.7")}</label>
    
    
  </div>
  <div className='flex flex-col md:flex-row  md:items-center md:justify-between'>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{t("signup.8")}</button>
 
  <div className="text-sm font-medium text-gray-500 mt-3 dark:text-gray-300">
  {t("signup.9")} <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">{t("signup.10")}</Link>
        </div>
        </div>
        </div>
</form>

    </div>
    </div>

  )
}

export default Signup
