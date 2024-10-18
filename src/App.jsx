import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const displayContent = (content) => {
    setResult((prevResult) => prevResult + content);
  };

  const calcScreenClear = () => {
    setResult(''); 
  };

  const calcOutput = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult('Error'); 
    }
  };

  // Function to delete the last entered value
  const calcLastValue = () => {
    setResult((prevResult) => prevResult.slice(0, -1)); // Remove the last character from result
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" id="result" placeholder="0" value={result} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => displayContent('7')}>7</button>
        <button onClick={() => displayContent('8')}>8</button>
        <button onClick={() => displayContent('9')}>9</button>
        <button onClick={() => displayContent('*')}>×</button>
        <button onClick={() => displayContent('4')}>4</button>
        <button onClick={() => displayContent('5')}>5</button>
        <button onClick={() => displayContent('6')}>6</button>
        <button onClick={() => displayContent('-')}>−</button>
        <button onClick={() => displayContent('1')}>1</button>
        <button onClick={() => displayContent('2')}>2</button>
        <button onClick={() => displayContent('3')}>3</button>
        <button onClick={() => displayContent('+')}>+</button>
        <button onClick={calcScreenClear}>AC</button>
        <button onClick={() => displayContent('0')}>0</button>
        <button onClick={() => displayContent('/')}>÷</button>
        <button onClick={calcOutput}>=</button>
        <button onClick={() => displayContent('.')}>.</button>
        <button onClick={() => displayContent('00')}>00</button>
        <button onClick={calcLastValue}>Del</button>
      </div>
    </div>
  );
}

export default App;
