import React from "react";

const HistoryView = ({ history, clearHistory }) => (
    <div className="history-view">
        <div className="history-list">
        {history.length === 0 ? (
            <p>No History available</p>
        ) : (
            history.map((entry, index) => (
                <div key={index} className="history-item">
                    <span>{entry.expression}</span> 
                    <span>=</span>
                    <span>{entry.result}</span>
                </div>
            ))
        )}
        </div>
    </div>
);

export default HistoryView;