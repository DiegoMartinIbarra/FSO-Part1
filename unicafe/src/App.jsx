import { useState } from 'react'

const Button = ({eventHandler, name}) =>{
  return(
    <div>
      <button onClick={eventHandler} >{name}</button>
    </div>
  )
}

const StatisticLine = ({name, value}) => {
if (name == "positive"){
    return(
      <div>
        <span>{name}</span> <span>{value}%</span>
      </div>
  )
} else{
   return(
    <div>
      <span>{name}</span> <span>{value}</span>
    </div>)
}
}

const Statistics = ({good, neutral, bad}) => {
  let all = good+neutral+bad;
 
  if(all==0){
    return(
     <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  else{
    return(
      <div>
        <h1>statistics</h1>
        <StatisticLine name={"good"} value={good} />
        <StatisticLine name={"neutral"} value={neutral} />
        <StatisticLine name={"bad"} value={bad} />
        <StatisticLine name={"all"} value={all} />
        <StatisticLine name={"average"} value={(good-bad)/all} />
        <StatisticLine name={"positive"} value={Math.trunc((good/all)*100)} />
      </div>
  )}
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
const handleGoodClick = () => {
  setGood(good + 1);
};
const handleNeutralClick = () => {
  setNeutral(neutral + 1);
};
const handleBadClick = () => {
  setBad(bad + 1);
};

  return (
    <div>
      <h1>give feedback</h1>
      <Button eventHandler={handleGoodClick} name={"good"} />
      <Button eventHandler={handleNeutralClick} name={"neutral"} />
      <Button eventHandler={() => setBad(bad + 1)} name={"bad"} />
    
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App