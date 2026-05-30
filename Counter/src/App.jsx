/*
// import { useState } from "react"

function App() {
  // const [count, setCount] = useState(0)

  let counter = 15;

  let increaseMethod = () => {
        counter = counter + 1;
        console.log(`The value of Count is ${counter}`);
      }
  
  let decreaseMethod = () => {
        counter = counter - 1;
        console.log(`The value of Count is ${counter}`);
      }
  return (
    <>
      <h2>The count is {counter}</h2>
      <button onClick={(increaseMethod)} id = "increment button">increase the value</button>
      
      <button onClick={(decreaseMethod)} id = "decrement button">decrease the value</button>
    </>
  )
}

export default App

*/

// Here you will see that when we click the button the variable is updated but the UI is not updated because, React is a library which handles all the UI updates itself....here we have something called hooks which is responsible UI changes, different hooks have different functions and are used differently.

// One of the hooks which we are going to use here for our purpose is useState Hook.

import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  let incrementFunction = () => {
    if(counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    else{
      return
    }
  }
  let decrementFunction = () => {
    if(counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
    else{
      return;
    }    
  }
  return (
    <>
      <h2>The count is {counter}</h2>
      <button id="incrementButton" onClick={incrementFunction}>Tap to increase</button>
      <button id="decrementButton" onClick={decrementFunction}>Tap to decrease</button>
    </>
  )
}

export default App