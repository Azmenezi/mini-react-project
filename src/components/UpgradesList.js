import React, { useState } from "react";
import Upgrade from "./Upgrade";
const UpgradesList = ({ upgrades, currency, setCurrency, setPlanetPC }) => {
  const [list, setList] = useState(upgrades);
  const upgradeList = list
    .filter((upgrade) => upgrade.price <= currency)
    .map((upgrade) => (
      <Upgrade
        upgrade={upgrade}
        setPlanetPC={setPlanetPC}
        setCurrency={setCurrency}
        currency={currency}
      />
    ));

  return <div>{upgradeList}</div>;
};

export default UpgradesList;
