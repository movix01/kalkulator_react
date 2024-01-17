import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Błąd');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="calculator">
            <div className="title">Kalkulator</div>
            <div className="display">
              <input
                type="text"
                className="input is-medium"
                value={input}
                readOnly
              />
              <input
                type="text"
                className="input is-medium"
                value={result}
                readOnly
              />
            </div>
            <div className="buttons">
              {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '=', '+', 'C'].map((item, index) => (
                <button
                  key={index}
                  className={`button is-medium ${isNaN(item) && 'is-danger'}`}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;