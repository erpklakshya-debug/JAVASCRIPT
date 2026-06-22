import { useState } from 'react' 
import reactLogo from './assets/react.svg' 
import viteLogo from './assets/vite.svg' 
import heroImg from './assets/hero.png' 
import './App.css' 
import Students from './Components/Students'
function App() { 
  return ( 
    <div className="container"> 
      <h1><u>Student Dashboard</u></h1> 
      <div className="card-container"> 
        <Students name="Akash Yadav" age={18} physics={87} chemistry={93} maths={71} /> 
        <Students name="Shalley Sharma" age={19} physics={92} chemistry={86} maths={99} /> 
        <Students name="Sanjay Verma" age={18} physics={88} chemistry={82} maths={91} /> 
        <Students name="Ankita Singh" age={21} physics={71} chemistry={65} maths={70} /> 
        <Students name="Rahul Gupta" age={19} physics={92} chemistry={91} maths={95} /> 
      </div> 
    </div> 
  ); 
} 
export default App; 