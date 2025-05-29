import './App.css'; 
import TextForm from "./components/TextForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React,{ useState } from 'react';
import Alert from "./components/Alert";
import{
BrowserRouter as Router,
Routes,
Route,
  
} from "react-router-dom";

function App() {
  const[alert,setalert]=useState("null");
  const[mode,setmode]=useState('light');

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    },1500);
  }
  const togglemode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#104675';
      showalert("dark mode has been enabled","success");
      //document.title = 'textutils-dark mode'
      //setInterval(() => {
      //document.title="textutils is in amazing mode"
      //},5000);
      //setInterval(() => {
      //document.title=" install textutils now"
    //},2000);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success");
      //document.title='textutils-light mode'
    }
  }
  
    return ( <> 
      <Router>
      <Navbar title="textutils" aboutapp="about" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
             <Route path="/about" element={<About mode={mode}/>}>
             
             </Route>
             <Route path="/" element={<TextForm showAlert={showalert} heading="Try Textutils-word & character counter, case converter, text copier." mode={mode}/>}>
            
            </Route>
      </Routes>
     
      </div>
    </Router>
    
      </>
      );
}

export default App;