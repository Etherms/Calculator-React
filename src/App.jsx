import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Value from "./components/Value";
import Button from "./components/Button";
// import Setting from "./components/Setting"

import './App.css'

function App() {
  var [displayedValue, setDisplayedValue] = useState('');
  var [totalValue, setTotalValue] = useState('');

  const handleValueClick = (value) => {
    if (value === 'backspace') {
      if (displayedValue.length > 0) {
        const newDisplayedValue = displayedValue.slice(0, -1);
        setDisplayedValue(newDisplayedValue);
      }
    } else if (value === 'C') {
      setTotalValue('');
      setDisplayedValue('');
    } else if (value === '%') {
      setDisplayedValue(displayedValue + value);
    } else if (['÷', 'X', '+', '-'].includes(value)) {
      setTotalValue(totalValue + displayedValue);
      setDisplayedValue(displayedValue + value);
    } else if (value === '=') {
      const operators = ['+', '-', 'X', '÷', '%'];
      const operatorSymbol = operators.find(op => displayedValue.includes(op));

      if (operatorSymbol) {
        const [leftOperand, rightOperand] = displayedValue.split(operatorSymbol);

        let result = 0;
        switch (operatorSymbol) {
          case '+':
            result = parseFloat(leftOperand) + parseFloat(rightOperand);
            break;
          case '-':
            result = parseFloat(leftOperand) - parseFloat(rightOperand);
            break;
          case 'X':
            result = parseFloat(leftOperand) * parseFloat(rightOperand);
            break;
          case '÷':
            result = parseFloat(leftOperand) / parseFloat(rightOperand);
            break;
          case '%':
            result = parseFloat(leftOperand) / 100;
            break;
          default:
            break;
        }

        setDisplayedValue(result.toString());
        setTotalValue('');
      }
    } else {
      setDisplayedValue(displayedValue + value);
    }
  };

  return(
    <div className='calculator-container'>
      <Header />
      <Value displayedValue={displayedValue} totalValue={totalValue}/>
      <Button onClick={handleValueClick} />
      {/* <Setting /> */}
    </div>
  )
}


export default App
