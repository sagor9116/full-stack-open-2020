import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({value, text}) => {
  return(
    <table>
      <tbody>
        <tr>
          <td>{text} : {value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({good,bad,neutral}) => {
  const totalFeedBack = good + bad +neutral;
  const averageFeedBack = (good - bad) /totalFeedBack;
  const positiveFeedBack = (good / totalFeedBack) * 100 + "%";

  if (totalFeedBack <= 0) {
    return(
      <div>
        <h1>No FeedBack Given</h1>
      </div>
    )
  }
  return(
    <div>
        <Statistic value = {good} text ="good" />
        <Statistic value = {neutral} text ="neutral" />
        <Statistic value = {bad} text ="bad" />
        <Statistic value = {totalFeedBack} text ="all" />
        <Statistic value = {averageFeedBack} text ="average" />
        <Statistic value = {positiveFeedBack} text ="positive" />
    </div>
  )
}

const Button = ({handleClickGood,handleClickNeutral,handleClickBad}) => {
  return(
    <div>
      <button onClick={handleClickGood}> Good:</button>
       <button onClick={handleClickNeutral}> Neutral:</button>
       <button onClick ={handleClickBad}> Bad:</button>
    </div>
  )
}


const App = () => {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }
 
  return(
    <div>
      <h1>Give feedback</h1>
      <Button 
        handleClickGood={handleClickGood} 
        handleClickNeutral ={handleClickNeutral} 
        handleClickBad ={handleClickBad}
        />
      
      <div>
      <Statistics good = {good} bad ={bad} neutral ={neutral} />
      </div>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

