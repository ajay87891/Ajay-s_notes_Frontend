import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About'
import Home from './Components/Home'
import NavBar from './Components/NavBar';
import NoteState from "./Context/notes/NoteState";

function App() {
  return (
   <>
   <div className='bg-gradient-to-tr from-purple-500/60 via-orange-400/60 to-pink-500/60 dark:from-purple-500/40 dark:via-slate-400/40 dark:to-pink-500/40 min-h-[100vh]'>
   <NoteState>

   
   
   <Router>
        
        <NavBar />
        
        
        
        <Routes>
            <Route exact path="/about"
              element = {<About />}
            />
            
            <Route exact path="/" 
            element={
            <Home/>}
            />
            
  
          </Routes>
          
          </Router>
          

          </NoteState>
          </div>
   </>
  );
}

export default App;
