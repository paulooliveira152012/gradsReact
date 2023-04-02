import React  from "react";
import './style.css';

function Header({ onButtonClick }) {
    return (
      <header>
        <div id="buttons">
            <button onClick={() => onButtonClick("Section1")}>Section1</button>
            <button onClick={() => onButtonClick("Section2")}>Section2</button>
            <button onClick={() => onButtonClick("Section3")}>Section3</button>
        </div>
      </header>
    );
  }

export default Header;