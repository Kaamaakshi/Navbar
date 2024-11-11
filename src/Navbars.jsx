

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Navbars.css";

function Navbars({ number }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      const user = response.data.results[0];
      setUserData(user);
    });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="navbar">
      <div className="header">
        <div className="profile">
          <div className="number">{number}</div>
          <div className="img">
            <img src={userData.picture.medium} alt="User" />
          </div>
          <div className="name">
            {userData.name.first} {userData.name.last}
          </div>
        </div>
        <div className="score">&pound; 52,375</div>
      </div>
    </div>
  );
}

export default Navbars;
