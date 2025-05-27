import React, {useState} from 'react';

const App = () =>{
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  const handleClickInc = () =>{
    setCount(count + 1);
  }

  const handleClickDec = () =>{
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
    </div>
  )
}

export default App;