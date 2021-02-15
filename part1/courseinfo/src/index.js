//Component state, event handlers

import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const Display = ({counter}) => {
  return(
    <div>
      <h1>{counter}</h1>
    </div>
  )
}

const Button = ({handleClick,text}) => {
  return(
    <button onClick={handleClick}>
        {text}
    </button>
  )
}

const App = () => {
  const [counter,setCounter] = useState(0)
  const increasedByOne = () => {
    setCounter(counter + 1)
  }
  const decreasedByOne = () => {
    setCounter(counter - 1)
  }
  const setToZero = () => {
    setCounter(0)
  }
  return (
    <div>
      <Display counter ={counter} />
      <Button handleClick = {increasedByOne} text = "plus" />
      <Button handleClick = {decreasedByOne} text="minus"/>
      <Button handleClick={setToZero} text="zero" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


