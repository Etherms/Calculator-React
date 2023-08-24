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
      if(value === "backspace"){
            alert("delete");
      }
      else if(value ==="C"){
            displayedValue =  "";
            totalValue = "";
            setTotalValue(totalValue);
            setDisplayedValue(displayedValue);
      }
      else if(value ==="%"){
            setDisplayedValue(displayedValue + value);

      }
      else if(value ==="÷"||value ==="X" || value ==="+" || value ==="-" ){
            setTotalValue(totalValue + displayedValue);
            setDisplayedValue(displayedValue + value);
      }
      else if(value === "="){
        var operators = ["+", "-", "X", "÷","%"];
        var operatorIndex = -1;
        var operatorSymbol = "";

        for(let i=0; i<operators.length; i++){
          var currentIndex = displayedValue.indexOf(operators[i]);
          if (currentIndex !== -1) {
            operatorIndex = currentIndex;
            operatorSymbol = operators[i];
            break;
        }
        }
        if (operatorIndex !== -1) {
          var leftOperand = displayedValue.substring(0, operatorIndex);
          var rightOperand = displayedValue.substring(operatorIndex + 1);
        }      
        var result = 0;

        switch (operatorSymbol) {
            case "+":
                result = parseFloat(leftOperand) + parseFloat(rightOperand);
                break;
            case "-":
                result = leftOperand - rightOperand;
                break;
            case "X":
                result = leftOperand * rightOperand;
                break;
            case "÷":
                result = leftOperand / rightOperand;
                break;
            case "%":
                result = leftOperand /100;
                break;
        }
        setDisplayedValue(displayedValue = result);
        setTotalValue(totalValue = "")
      }
      else{
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
