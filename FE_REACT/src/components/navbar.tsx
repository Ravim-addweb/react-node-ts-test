import React, { useContext } from 'react'
import "components/styles/navbar.scss";
import Context from 'providers/themeProvider';

const defaultOptions = {    
    invertedIconLogic: false
};
function Navbar() {
    const { toggleTheme, theme } = useContext(Context)
    const invertedIconLogic = defaultOptions.invertedIconLogic
    return (
        <div className="navbar">
            {/* theme toggle start */}
            <label
                className="container"
                title={theme === "light" ? "Activate light mode" : "Activate dark mode"}
                aria-label={theme === "light" ? "Activate light mode" : "Activate dark mode"}
            >
                <input
                type="checkbox"
                defaultChecked={invertedIconLogic ? !(theme === "light") : theme === "light"}
                onChange={() => {
                    toggleTheme(theme === "light" ? "dark" : "light")
                    localStorage.setItem("theme", theme === "light" ? "dark" : "light")
                }}
                />
                <div />
            </label>
            {/* theme toggle end */}
        </div>
    )
}

export default Navbar