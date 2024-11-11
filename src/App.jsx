import React from "react";
import Navbar from "./Navbar";

const App = () => {
  const navbarCount = 6;

  const navbars = [];
  for (let i = 1; i <= navbarCount; i++) {
    navbars.push(<Navbar key={i} number={i} />);
  }

  return <>{navbars}</>;
};

export default App;
