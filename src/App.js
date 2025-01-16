import logo from './logo.svg';
import './App.css';
import Result from './Result';
import {useState} from "react";

const secretNum = Math.floor(Math.random() * 10) + 1

function App() {

   const [terms,setTerm] = useState("")


  // function handleInput(e){
  //   setTerm(e.target.value)
  //   console.log("Current State",terms)

  // }

  const handleInput = (e) =>{
    setTerm(e.target.value)
  }

  
  return (
    <div className="container">
        <div className="head">
          <label htmlFor="term">Guess the Number (answer:{secretNum})</label>
        </div>
        <div className='inpuDiv'>
        <input
        id="term"
        type="text"
        name="term"
        onChange={handleInput}
        />
        </div>
        <Result secretNum={secretNum} terms={terms} />
        
    </div>
);
}

export default App;
