import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import AlertContext from "../Context/alert/AlertContext";
import { useTranslation } from "react-i18next";

function Login() {
  const {t} = useTranslation();
  const context = useContext(AlertContext);
  const {showAlert} = context;
    let navigate = useNavigate();
  const [credentials, setCredentials] = useState({name:"", email: "", password: "" });
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://emerald-penguin-slip.cyclic.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        console.log(json.authToken); //Redirect from here
        navigate('/')
        showAlert("Login Successful", "Success", "visible");

      } else {
        console.log(json.error); // Alert here
        showAlert(json.error, "Error", "visible");
      }
    } catch (error) {
        if(error.message === 'Failed to fetch'){
            showAlert("Unable to reach Server", "Error", "visible")
        }
        // console.log( error.message);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center pt-1">
      <div className="w-10/12 mt-2 items-center justify-center flex">
        <div className="w-full max-w-sm p-4 bg-white/25 border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800/25 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handelSubmit}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {t("login.1")}
              
            </h5>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("login.2")}
                
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50/60 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@example.com"
                onChange={onChange}
                value={credentials.email}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("login.3")}
                
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50/60 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                onChange={onChange}
                value={credentials.password}
                required
              />
            </div>
            {/* <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="/"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div> */}
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {t("login.4")}
              
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            {t("login.5")}
              {" "}
              <Link
                to="/signup"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                {t("login.6")}
                
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
