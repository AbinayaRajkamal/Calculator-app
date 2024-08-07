import React, { forwardRef } from "react";

const DropdownMenu = forwardRef(({ theme, view, dropdownOpen, setDropdownOpen, toggleTheme, toggleView, clearHistory }, ref) =>{
    const handleClearHistory = () => {
        clearHistory();
        setDropdownOpen(false);
    };
    return (
    <div className="dropdown" ref={ref}>
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-toggle">
            ☰
        </button>
        {dropdownOpen && (
            <div className="dropdown-menu">
                <button onClick={toggleTheme} aria-label="Toggle dark mode">
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
                <button onClick={toggleView} aria-label="Toggle history view">
                    {view === 'calculator' ? 'View History' : 'Back to Calculator'}
                </button>
                {view === 'history' && (
                <button onClick={handleClearHistory} aria-label="Clear history">
                     Clear History
                </button>
                )}
            </div>
        )}
    </div>
    );
    });

export default DropdownMenu;