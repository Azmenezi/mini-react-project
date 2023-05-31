import React, { useEffect } from "react";
import  "../assets/css/style.css";
const Upgrade = ({
  upgrade,
  setPlanetPC,
  setCurrency,
  currency,
  perSecond,
  setPerSecond,
  planetPC,
}) => {
  const changeDPC = () => {
    setPlanetPC(planetPC + upgrade.DPC);
    setCurrency(currency - upgrade.price);
  };
  const changePerSecond = () => {
    setPerSecond(perSecond + upgrade.persecond);
  };

  return (
    <button
      className="upgradeButton"
      onClick={() => {
        changeDPC();
        changePerSecond();
      }}
    >
      {upgrade.name}
    </button>
  );
};

export default Upgrade;
