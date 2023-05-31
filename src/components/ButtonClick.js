import React from "react";
import Currency from "./Currency";
import DestroyedPlanets from "./DestroyedPlanets";
import UpgradesList from "./UpgradesList";
import  "../assets/css/style.css";
const ButtonClick = ({
  setCurrency,
  planetPC,
  currency,
  destroyedPlanets,
  setDestroyedPlanets,
  upgrades,
  setPlanetPC,
  setPerSecond,
  perSecond,
}) => {
  console.log(currency, perSecond, planetPC);
  return (
    <div>
      <Currency currency={currency} />
      <DestroyedPlanets destroyedPlanets={destroyedPlanets} />
      <button
        className="ButtonClicker"
        onClick={() => {
          setCurrency(currency + planetPC);
          setDestroyedPlanets(destroyedPlanets + planetPC);
        }}
      >
        Click me
      </button>
      <UpgradesList
        upgrades={upgrades}
        setPlanetPC={setPlanetPC}
        setCurrency={setCurrency}
        currency={currency}
        perSecond={perSecond}
        setPerSecond={setPerSecond}
        planetPC={planetPC}
      />
    </div>
  );
};

export default ButtonClick;
