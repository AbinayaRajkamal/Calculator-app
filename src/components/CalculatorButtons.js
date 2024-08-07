import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const CalculatorButtons = ({ handleClick, handleClear, handleRemove, calculateResult, calculateFactorial, calculateInverse, calculatePercentage, calculateSquare, calculateSquareRoot, alternateSign }) => (
    <div className="buttons button1">
        <button onClick={handleClear} className="symbol-button">C</button>
        <button onClick={calculatePercentage} className="symbol-button">%</button>
        <button onClick={calculateInverse} className="symbol-button">1/x</button>
        <button onClick={handleRemove} className="symbol-button"><FaDeleteLeft /></button>            
        <button onClick={calculateSquare} className="symbol-button">x<sup>2</sup></button>
        <button onClick={calculateSquareRoot} className="symbol-button">&radic;x</button>
        <button onClick={calculateFactorial} className="symbol-button">x!</button>
        <button onClick={() => handleClick('/')} className="symbol-button">/</button>
        <button onClick={() => handleClick('7')} className="number-button">7</button>
        <button onClick={() => handleClick('8')} className="number-button">8</button>
        <button onClick={() => handleClick('9')} className="number-button">9</button>
        <button onClick={() => handleClick('*')} className="symbol-button">*</button>
        <button onClick={() => handleClick('4')} className="number-button">4</button>
        <button onClick={() => handleClick('5')} className="number-button">5</button>
        <button onClick={() => handleClick('6')} className="number-button">6</button>
        <button onClick={() => handleClick('-')} className="symbol-button">-</button>
        <button onClick={() => handleClick('1')} className="number-button">1</button>
        <button onClick={() => handleClick('2')} className="number-button">2</button>
        <button onClick={() => handleClick('3')} className="number-button">3</button>
        <button onClick={() => handleClick('+')} className="symbol-button">+</button>
        <button onClick={() => alternateSign()} className="number-button">+/-</button>
        <button onClick={() => handleClick('0')} className="number-button">0</button>
        <button onClick={() => handleClick('.')} className="number-button">.</button>
        <button onClick={calculateResult} className="symbol-button">=</button>
    </div>
);

export default CalculatorButtons;