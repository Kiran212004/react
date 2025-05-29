import './App.css';
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import{
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";


const App =()=>{
    const pageSize=20;
    const[progress,setProgress]=useState(0)
  //state={
   // progress:0
  //}
 
  //setProgress=(progress)=>{
   // this.setState({progress:progress})
  //}
      return (
      <div>
        <Router>
        <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/general"  element={<News setProgress={setProgress} pageSize={pageSize} key="general" country="us" category="general"/>}/>
          <Route exact path="/" element={<News setProgress={setProgress} pageSize={pageSize} key="general"  country="us" category="general" />}/>
          <Route exact path="/health"  element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health"/>}/>
       
          <Route exact path="/science"  element={<News setProgress={setProgress} pageSize={pageSize} key="science" country="us" category="science"/>}/>
        
          <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={pageSize}  key="sports" country="us" category="sports"/>}/>
        
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business"/>}/>
        
        
          <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize}  key="entertainment" country="us" category="entertainment"/>}/>
        
        
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology"  pageSize={pageSize} country="us" category="technology"/>}/>
      

        </Routes>
        </Router>
      </div>
    )
  
}

export default App;
