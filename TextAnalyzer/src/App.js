import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import React, { useState } from 'react';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  }
  const toggleMode=()=>{
    if(mode==='light'){  
      setMode('dark');
      document.body.style.backgroundColor='#696969';
      document.title="TextAnalyzer- Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="TextAnalyzer- Light Mode";
    }
  }
  return (
    //This is JSX.
    <>
    <BrowserRouter>
      <Navbar title="TextAnalyzer" aboutT="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}></Route>
        <Route exact path="/"
          element={
          <Form heading="Go on! Enter your text here.." showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}


export default App;
