import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About'
import Home from './Components/Home'
import NavBar from './Components/NavBar';

function App() {
  return (
   <>
   <div className="bg-white/10">
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
          </div>
   </>
  );
}

export default App;
