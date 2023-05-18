import './App.css';
import { Nav } from './components/Nav';
import React,{useState} from 'react';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enable or not
  
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }

  }

  return (
    <>
    
    <Nav mode = {mode} toggleMode={toggleMode} />
    <div className = 'container' toggleMode={toggleMode} >
      <TextForm heading='Enter the text to Analyze' mode = {mode} toggleMode={toggleMode} />
    </div>
  
    
    
    
    </>
  );
}

export default App;
