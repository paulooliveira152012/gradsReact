//useState is used to conditionally render portions of the webapp
import React, { useState} from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Section1 from "./components/Section1/section1";
import Section2 from "./components/Section2/section2";
import Section3 from "./components/Section3/section3";

function App() {
  const [sectionToShow, setSectionToShow] = useState(null);

  const handleButtonClick = (section) => {
    setSectionToShow(section)
  }

  return (
    <div>
      <Header onButtonClick={handleButtonClick} />
      {/* {sectionToShow === "Main" && <Main />} */}
      {sectionToShow === "Section1" && <Section1 />}
      {sectionToShow === "Section2" && <Section2 />}
      {sectionToShow === "Section3" && <Section3 />}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
