import React, { useState } from "react";
import Upgrade from "./Upgrade";

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

  return <div>{upgradeList}</div>;
};

export default UpgradesList;
