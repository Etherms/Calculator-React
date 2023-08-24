import { useEffect } from "react";
import React from 'react'


const Button = ({ onClick }) => {
        useEffect(() => {
                const equationButtons = document.querySelectorAll(".equation-button");
                const numberButtons = document.querySelectorAll(".number-button");
                const totalButton = document.querySelectorAll(".total-button");
        
        const handleClick = (event) => {
                const clickedButton = event.target;
                const buttonValue = clickedButton.textContent;
                onClick(buttonValue); // Pass the value to the parent's handler
        };
        
                equationButtons.forEach(button => {
                        button.addEventListener('click', handleClick);
                });
                numberButtons.forEach(button => {
                        button.addEventListener('click', handleClick);
                });
                totalButton.forEach(button => {
                        button.addEventListener('click', handleClick);
                });

          // Clean up the event listeners when the component unmounts
        return () => {
                equationButtons.forEach(button => {
                button.removeEventListener('click', handleClick);
        });
                numberButtons.forEach(button => {
                        button.removeEventListener('click', handleClick);
                });
                totalButton.forEach(button => {
                        button.removeEventListener('click', handleClick);
                });
        };
        }, [onClick]);      

return(
        <div className='button-container'>
                <div className="button-row row-5">
                        <button id="reset" className='equation-button'>C</button>
                        <button id="percentage" className='equation-button'>%</button>
                        <button id="delete" className='equation-button'><span className="material-symbols-outlined">
                        backspace
                        </span></button>
                        <button id="divide" className='equation-button'>÷</button>
                </div>
                <div className="button-row row-4">
                        <button id="seven" className="number-button">7</button>
                        <button id="eight" className="number-button">8</button>
                        <button id="nine" className="number-button">9</button>
                        <button id="multiply" className="equation-button">X</button>
                </div>
                <div className="button-row row-3">
                        <button id="four" className="number-button">4</button>
                        <button id="five" className="number-button">5</button>
                        <button id="six" className="number-button">6</button>
                        <button id="subtract" className="equation-button">-</button>
                </div>
                <div className="button-row row-2">
                        <button id="one" className="number-button">1</button>
                        <button id="two" className="number-button">2</button>
                        <button id="three" className="number-button">3</button>
                        <button id="addition" className="equation-button">+</button>
                </div>
                <div className='button-row row-1'>
                        <button id="doubleZero" className="number-button">00</button>
                        <button id="zero" className="number-button">0</button>
                        <button id="dot" className="number-button">.</button>
                        <button id="equals" className="total-button">=</button>
                </div>
        </div>
        )
};
export default Button;
