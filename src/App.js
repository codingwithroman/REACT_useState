import './App.css';
import React, { useState } from 'react';  


function App() {
  const [counter, setCounter] = useState(0);

  const handleCounterClick = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    
  }


  return (
    <div className="App">
      <button onClick={handleCounterClick}>+1</button>
      <h3>Counter: {counter}</h3>
      <div>

      </div>
    </div>
  );
}

export default App;
