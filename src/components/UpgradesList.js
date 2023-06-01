import Upgrade from "./Upgrade";
import "../assets/css/style.css";
const UpgradesList = ({
  upgrades,
  currency,
  setCurrency,
  setPlanetPC,
  perSecond,
  setPerSecond,
  planetPC,
}) => {
  const upgradeList = upgrades
    .filter((upgrade) => upgrade.price <= currency)
    .sort((a, b) => b.price - a.price)
    .map((upgrade) => (
      <Upgrade
        key={upgrade.id}
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
