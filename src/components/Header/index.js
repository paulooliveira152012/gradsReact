import React  from "react";

function Header({ onButtonClick }) {
    return (
      <header>
        <button onClick={() => onButtonClick("Main")}>Main</button>
        <button onClick={() => onButtonClick("Section1")}>Section1</button>
        <button onClick={() => onButtonClick("Section2")}>Section2</button>
        <button onClick={() => onButtonClick("Section3")}>Section3</button>
      </header>
    );
  }

export default Header;