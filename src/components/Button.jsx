import { useEffect } from "react";
import React from 'react'


const Button = ({ onClick }) => {
        useEffect(() => {
                const equationButtons = document.querySelectorAll(".equation-button");
                const numberButtons = document.querySelectorAll(".number-button");
                const totalButton = document.querySelectorAll(".total-button");

        
                const handleClick = (buttonValue) => {
                    onClick(buttonValue); // Pass the value to the parent's handler
                };
        
                const handleKeyDown = (event) => {
                        const pressedKey = event.key;
                        console.log(pressedKey);
                    
                        // Define a mapping of key names or key codes to corresponding classes
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
                                'Backspace': 'key-backspace', // Mapping for Backspace key
                                'Escape': 'key-escape',       // Mapping for Escape (Esc) key
                                'Enter': 'key-enter',
                                '.': 'key-.'
                            // Add more mappings for other keys
                        };

                        const correspondingClass = keyClassMap[pressedKey];

                        if (correspondingClass) {
                                const correspondingButton = document.querySelector(`.${correspondingClass}`);
                                handleClick(correspondingButton.textContent);
                        }
                };
        
                equationButtons.forEach(button => {
                    button.addEventListener('click', () => handleClick(button.textContent));
                });
        
                numberButtons.forEach(button => {
                    button.addEventListener('click', () => handleClick(button.textContent));
                });
        
                totalButton.forEach(button => {
                    button.addEventListener('click', () => handleClick(button.textContent));
                });
        
                // Attach keydown event listener to the document
                document.addEventListener("keydown", handleKeyDown);
        
                // Clean up the event listeners when the component unmounts
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
                        <button id="r" className='equation-button key-reset key-escape'>C</button>
                        <button id="%" className='equation-button key-%'>%</button>
                        <button id="<" className='equation-button key-backspace'><span className="material-symbols-outlined">
                        backspace
                        </span></button>
                        <button id="/" className='equation-button key-divide'>÷</button>
                </div>
                <div className="button-row row-4">
                        <button className="number-button key-7">7</button>
                        <button className="number-button key-8">8</button>
                        <button className="number-button key-9">9</button>
                        <button id="*" className="equation-button key-multiply">X</button>
                </div>
                <div className="button-row row-3">
                        <button className="number-button key-4">4</button>
                        <button className="number-button key-5">5</button>
                        <button className="number-button key-6">6</button>
                        <button id="-" className="equation-button key-minus">-</button>
                </div>
                <div className="button-row row-2">
                        <button className="number-button key-1">1</button>
                        <button className="number-button key-2">2</button>
                        <button className="number-button key-3">3</button>
                        <button className="equation-button key-plus">+</button>
                </div>
                <div className='button-row row-1'>
                        <button id="00" className="number-button">00</button>
                        <button className="number-button key-0">0</button>
                        <button id="." className="number-button key-.">.</button>
                        <button id="=" className="total-button key-equals key-enter">=</button>
                </div>
        </div>
        )
};
export default Button;
