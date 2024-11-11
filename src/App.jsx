import React from "react";
import Navbars from "./Navbars";

const App = () => {
  const navbarCount = 6;

  const navbars = [];
  for (let i = 1; i <= navbarCount; i++) {
    navbars.push(<Navbars number={i} />);
  }

  return <>{navbars}</>;
};

export default App;
