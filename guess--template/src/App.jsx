import React from 'react' 
import './App.css'
function App() {

  const secretNumber  = 12;
  const [userGuess, setUserGuess] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  const checkGuess = () => {
    if(Number(userGuess) == secretNumber){
      setMessage('YOu Guessed : Yippee, Correct!');
    } else {
      setMessage('Try Again!');
    }
  };

  return (
    <>
    <div className='card'>
    <h2 className='title'>Guess Challenge</h2>
    <h2 className='subtitle'>GUess the Number 1 to 20 </h2>
    <input 
    type="number"
    value={userGuess}
    onChange={(e) => setUserGuess(e.target.value)} 
    placeholder='Enter Number' 
    />

    <button onClick={checkGuess}>Check</button>

    {message && <h1 className='result'>{message}</h1>}
    </div>
    </>
    )
}
export default App;