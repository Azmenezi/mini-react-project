import React, { useState } from "react";
import Upgrade from "./Upgrade";
import  "../assets/css/style.css";
const UpgradesList = ({
  upgrades,
  currency,
  setCurrency,
  setPlanetPC,
  perSecond,
  setPerSecond,
  planetPC,
}) => {
  const [list, setList] = useState(upgrades);
  const upgradeList = list
    .filter((upgrade) => upgrade.price <= currency)
    .map((upgrade) => (
      <Upgrade
        upgrade={upgrade}
        setPlanetPC={setPlanetPC}
        setCurrency={setCurrency}
        currency={currency}
        perSecond={perSecond}
        setPerSecond={setPerSecond}
        planetPC={planetPC}
      />
    ));

  return <div className="upgradeList">{upgradeList}</div>;
};

export default UpgradesList;
