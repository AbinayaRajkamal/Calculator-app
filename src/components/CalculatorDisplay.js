import React from "react";

const CalculatorDisplay = ({ expression, result }) => (
    <div className="display">
        <input type="text" className="firstDisplay" value={expression} readOnly />
        <input type="text" className="secondDisplay" value={result} readOnly />
    </div>
)

export default CalculatorDisplay;