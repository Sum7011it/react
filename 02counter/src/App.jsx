import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  // let counter = 5;
  const addvalue = ()=> {
    counter = counter +1;
    // if (counter > 20) {
    //   counter=20;
    // } 
    // console.log("value added",counter);
    setCounter(counter);

    // two increment the counter by 4 most asked react interview question

    // setCounter(precounter => precounter+1 );
    // setCounter(precounter=> precounter+1);
    // setCounter(precounter=> precounter+1);
    // setCounter(precounter=> precounter+1);
  }
  const removeValue = ()=> {
    counter = counter -1;
    // if(counter <0){
    //   counter = 0;
    // }
    // console.log("value added",counter);
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1> 
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addvalue}
      >add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value{counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
