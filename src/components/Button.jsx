import { useEffect } from "react";
import PropTypes from "prop-types";


const Button = ({ onClick }) => {
    useEffect(() => {
      const keyClassMap = {
        '1': 'key-1',
        '2': 'key-2',
        '3': 'key-3',
        '4': 'key-4',
        '5': 'key-5',
        '6': 'key-6',
        '7': 'key-7',
        '8': 'key-8',
        '9': 'key-9',
        '0': 'key-0',
        '/': 'key-divide',
        '*': 'key-multiply',
        '-': 'key-minus',
        '+': 'key-plus',
        'c': 'key-reset',
        '=': 'key-equals',
        '%': 'key-%',
        'Backspace': 'key-backspace',
        'Escape': 'key-escape',
        'Enter': 'key-enter',
        '.': 'key-dot'
        // Add more mappings for other keys
      };
  
      const handleClick = (buttonValue) => {
        onClick(buttonValue); // Pass the value to the parent's handler
      };
  
      const handleKeyDown = (event) => {
        const pressedKey = event.key;
        const correspondingClass = keyClassMap[pressedKey];
  
        if (correspondingClass) {
          const correspondingButton = document.querySelector(`.${correspondingClass}`);
          handleClick(correspondingButton.textContent);
        }
      };
  
      const addClickListeners = (buttons) => {
        buttons.forEach(button => {
          button.addEventListener('click', () => handleClick(button.textContent));
        });
      };
  
      const equationButtons = document.querySelectorAll(".equation-button");
      const numberButtons = document.querySelectorAll(".number-button");
      const totalButton = document.querySelectorAll(".total-button");
  
      addClickListeners(equationButtons);
      addClickListeners(numberButtons);
      addClickListeners(totalButton);
  
      document.addEventListener("keydown", handleKeyDown);
  
      return () => {
        equationButtons.forEach(button => {
          button.removeEventListener('click', () => handleClick(button.textContent));
        });
  
        numberButtons.forEach(button => {
          button.removeEventListener('click', () => handleClick(button.textContent));
        });
  
        totalButton.forEach(button => {
          button.removeEventListener('click', () => handleClick(button.textContent));
        });
  
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClick]);
return(
        <div className='button-container'>
                <div className="button-row row-5">
                        <button id="r" className='button-key equation-button key-reset key-escape'>C</button>
                        <button id="%" className='button-key equation-button key-%'>%</button>
                        <button id="<" className='button-key equation-button key-backspace'><span className="material-symbols-outlined">
                        backspace
                        </span></button>
                        <button id="/" className='button-key equation-button key-divide'>÷</button>
                </div>
                <div className="button-row row-4">
                        <button className="button-key number-button key-7">7</button>
                        <button className="button-key number-button key-8">8</button>
                        <button className="button-key number-button key-9">9</button>
                        <button id="*" className="button-key equation-button key-multiply">x</button>
                </div>
                <div className="button-row row-3">
                        <button className="button-key number-button key-4">4</button>
                        <button className="button-key number-button key-5">5</button>
                        <button className="button-key number-button key-6">6</button>
                        <button id="-" className="button-key equation-button key-minus">-</button>
                </div>
                <div className="button-row row-2">
                        <button className="button-key number-button key-1">1</button>
                        <button className="button-key number-button key-2">2</button>
                        <button className="button-key number-button key-3">3</button>
                        <button className="button-key equation-button key-plus">+</button>
                </div>
                <div className='button-row row-1'>
                        <button id="00" className="button-key number-button">00</button>
                        <button className="button-key number-button key-0">0</button>
                        <button id="." className="button-key number-button key-dot">.</button>
                        <button id="=" className="button-key total-button key-equals key-enter">=</button>
                </div>
        </div>
        )
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
