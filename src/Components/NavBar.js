import React, { useState } from "react";
// import PropTypes from 'prop-types'
// import { Navbar } from "flowbite-react";
import icon from "../icons/notes.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import uk from "../icons/uk.png";
import japan from "../icons/japan.png";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(true);
  const [expand, setExpand] = useState(false);
  const [lang,setlang] = useState('English')
  const [langicon,setlangicon] = useState(uk)

  const changeLang = (Lang)=>{

    i18n.changeLanguage(Lang)
    if(Lang === 'en'){
      setlang('English')
      setlangicon(uk)
    }
    else{
      setlang('日本語')
      setlangicon(japan)
    }

  }

  const activeLink =
    "block py-2 pr-4 pl-3  rounded  md:p-0 md:bg-transparent text-white bg-blue-700 md:text-blue-700 dark:text-white";
  const inactiveLink =
    " block py-2 pr-4 pl-3 md:p-0 ease-linear duration-500 text-gray-700 rounded hover:bg-gray-300 hover:text-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  const changeTheme = () => {
    if (dark) {
      document.body.classList.add("dark");
      setDark(false);

      document.body.classList.add("bg-slate-800");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.remove("bg-slate-800");
      setDark(true);
    }
  };
  const handelNavbutton = () => {
    // let btn = document.getElementById("expand");
    let btn = document.querySelector("#expand");

    if (expand) {
      btn.classList.add("hidden");

      setExpand(false);
    } else {
      btn.classList.remove("hidden");
      // setExpand(true)
      setExpand(true);
    }
  };
  const dismissNavLink = () => {
    // let btn = document.getElementById("expand");
    let btn = document.querySelector("#expand");
    btn.classList.add("hidden");
    setExpand(false);
  };

  return (
    <div>
      <nav className="bg-yellow-100/30 fixed border-gray-200  px-4 md:px-2 py-2.5 rounded-lg dark:bg-gray-900/60  ease-linear duration-500 w-full mt-0 ml-0 backdrop-blur-xl z-10  shadow-md">
        <div className="flex">
          <div className="container flex flex-wrap justify-between items-center mx-auto ">
            <Link to="/" className="flex items-center">
              <span>
                <img
                  src={icon}
                  className="mr-3 h-16 min-w-[64px] "
                  alt="News Logo"
                />
              </span>
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                {t("greet.2")}
              </span>
            </Link>
            
            
            <button
              onClick={handelNavbutton}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600  ease-linear duration-500 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div className="hidden w-full md:block md:w-auto" id="expand">
              <ul className="flex flex-col p-4 mt-4 bg-gray-50/30 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white/0 dark:bg-gray-800/40 md:dark:bg-gray-900/0 dark:border-gray-700  ease-linear duration-500">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : inactiveLink
                    }
                    aria-current="page"
                    onClick={dismissNavLink}
                  >
                    {t("Nav.1")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/entertainment"
                    className={({ isActive }) =>
                      isActive ? activeLink : inactiveLink
                    }
                    aria-current="page"
                    onClick={dismissNavLink}
                  >
                    {t("Nav.2")}
                  </NavLink>
                </li>
                
              </ul>
            </div>

            </div>
          
          <div className="flex md:justify-center md:items-center mt-5 md:mt-0 ">
          <button
            onClick={changeTheme}
            className="inline-flex items-start mx-1 md:items-center md:my-auto "
            type="button"
          >
            <span className="hidden dark:inline  ease-linear duration-500">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  className="fill-sky-400/20"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  className="fill-sky-500"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  className="fill-sky-500"
                ></path>
              </svg>
            </span>
            <span className="dark:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  className="fill-blue-400/20 stroke-blue-700"
                ></path>
                <path
                  d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                  className="stroke-blue-700"
                ></path>
              </svg>
            </span>
          </button>
          {/*lang menue*/}

          <div className=" group inline-flex items-start mx-1 md:items-center md:my-auto">
            <div className="cursor-pointer flex  items-center  ">
              <img src={langicon} alt=""  className="h-5 w-5 min-w-[20px] " />
              <button className="mx-1 text-sm text-slate-800 dark:text-slate-200 w-16 hidden sm:block ">{lang}</button>
            </div>
            <ul className="mt-12 right-0 top-4 sm:top-1 p-0 bg-white/95 dark:bg-slate-800/95 rounded-md shadow-md absolute group-hover:block hidden z-20 cursor-pointer">
              <li>
                <span className="w-32 flex  p-2 rounded-md hover:bg-slate-500/25" onClick={()=>changeLang('en')}>
                  <img src={uk} alt=""  className="h-5 w-5 " />
                  <button className="px-2 text-slate-800 dark:text-slate-200 ">English</button>
                </span>
              </li>
              <li>
                <span className="w-32 flex  p-2 rounded-md hover:bg-slate-500/25" onClick={()=>changeLang('jp')}>
                <img src={japan} alt=""  className="h-5 w-5 " />
                <button className="px-2 text-slate-800 dark:text-slate-200">{t("lang.2")}</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        </div>
        
        
      </nav>
    </div>
  );
};

export default NavBar;
