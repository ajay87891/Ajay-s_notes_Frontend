import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Home() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/notes");
    } else {
    }
    

  });

  return (
    <>
    
    <div className="px-4">
      
      <div className="flex flex-col justify-center items-center pt-2 space-y-8">
      
        
          <h1 className="md:text-6xl text-4xl  text-slate-700 font-serif dark:text-slate-200">
          {t("home.1")}
            
          </h1>
          
          <p className="mt-3 text-slate-600 dark:text-slate-300 font-serif text-xl">
          {t("home.3")}
            
          </p>
          <div>
          <Link
            to="/login"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {t("home.4")}
            
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          </div>
          
            <h2 className="text-xl text-slate-600 dark:text-slate-300 font-serif">{t("home.5")}</h2>
          <Link
            to="/signup"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {t("home.6")}
            
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          </div>
        </div>
      
    </>
  );
}

export default Home;
