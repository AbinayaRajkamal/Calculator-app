import { useState, useEffect, useRef } from "react";
import { calculatedResult, squareRoot, square, percentage, switchSign, inverse, factorialFunc } from '../utils';
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import HistoryView from "./HistoryView";
import DropdownMenu from "./DropdownMenu";

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light');
  const [view, setView] = useState('calculator');
  const [history, setHistory] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [theme, view]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleView = () => setView(view === 'calculator' ? 'history' : 'calculator');
  const clearHistory = () => setHistory([]);

  const handleClick = (value) => {
    if(!result){
      setExpression(prevExpression => prevExpression + value);
    }  else {
       setExpression(result  + value)
       setResult('')
    }
  }

  const handleClear = () => {
    setExpression('');
    setResult('');
  }

  const handleRemove = () => {
    if (!result) {
      setExpression(prevExpression => prevExpression.slice(0,-1));
    }
  }

  const calculateResult = () => {
    try {
        const calcResult = calculatedResult(expression);
        setResult(calcResult);
        setHistory(prevHistory => [...prevHistory, {expression, result: calcResult}])
    } catch(err) {
        setResult('Error')
    }
  };

  const performOperation = (operationFunc, operationStr) => {
    const currentExpression = result ? result : expression;
    const calcResult = operationFunc(currentExpression);
    setResult(calcResult);
    setExpression(`${operationStr}(${currentExpression})`);
    setHistory(prevHistory => [...prevHistory, {expression: `${operationStr}(${currentExpression})`, result: calcResult}]);
  }

  const executeOperation = (operationFunc, operationStr) => {
    const currentExpression = result ? result : expression;
    const calcResult = operationFunc(currentExpression);
    setResult(calcResult);
    setExpression(`${currentExpression}${operationStr}`);
    setHistory(prevHistory => [...prevHistory, {expression: `${currentExpression}${operationStr}`, result: calcResult}]);
  }

  const calculateInverse = () => performOperation(inverse, '1/');
  const calculateSquare = () => performOperation(square, 'sqr');
  const calculateSquareRoot = () =>performOperation(squareRoot, '√');
  const calculatePercentage = () => executeOperation(percentage, '%');
  const calculateFactorial = () => executeOperation(factorialFunc, '!');

  const alternateSign = () => {
    const current = result ? result : expression;
    const newValue = switchSign(current);
    setResult(newValue);
    setExpression(newValue);
  }

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const handleDropdownOption = (option) => {
    if (option === 'toggleTheme') {
      toggleTheme();
    } else if (option === 'toggleView') {
      toggleView();
    }
  }

  const handleKey = (event) => {
    const key = event.key;
    const validKeys = '0123456789+-*/.=%';

    if (key === 'Delete' || key === 'Escape') {
      handleClear();
    } else if (key === 'Enter' || key === '=') {
      calculateResult();
    } else if (key === 'Backspace') {
      handleRemove();
    } else if (key === '%') {
      calculatePercentage();
    } else if (validKeys.includes(key)) {
      if (!result) {
        setExpression(prevExpression => prevExpression + key);
      } else {
        setExpression(result + key);
        setResult('');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [expression, result]);

  return (
      <div className="container">
          <header className={view === 'history' ? 'header-history' : ''}>
            <DropdownMenu
              ref={dropdownRef}
              theme={theme}
              view={view}
              dropdownOpen={dropdownOpen}
              setDropdownOpen={setDropdownOpen}
              toggleTheme={toggleTheme}
              toggleView={toggleView}
              clearHistory={clearHistory}
            />
          </header>
          <div className={view}>
            {view === 'calculator' ? (
              <div className="calculator-view">
                <CalculatorDisplay expression={expression} result={result} />
                <CalculatorButtons 
                  handleClick={handleClick}
                  handleClear={handleClear}
                  handleRemove={handleRemove}
                  calculateResult={calculateResult}
                  calculatePercentage={calculatePercentage}
                  calculateInverse={calculateInverse}
                  calculateSquare={calculateSquare}
                  calculateSquareRoot={calculateSquareRoot}
                  calculateFactorial={calculateFactorial}
                  alternateSign={alternateSign}
                />
              </div>
            ) : (
              <HistoryView history={history} clearHistory={clearHistory}/>
            )}
          </div>
      </div>
  );
};

export default Calculator;