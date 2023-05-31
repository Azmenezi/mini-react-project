import React from "react";

const Upgrade = ({ upgrade,setPlanetPC,setCurrency,currency }) => {
  const changeDPC = () => {
    setPlanetPC(upgrade.DPC);
    setCurrency(currency - upgrade.price);
  };
  return (
    <button
      className="upgradeButton"
      onClick={() => {
        changeDPC();
      }}
    >
      {upgrade.name}
    </button>
  );
};

export default Upgrade;
