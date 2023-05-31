import React from "react";
import Currency from "./Currency";
import DestroyedPlanets from "./DestroyedPlanets";
import UpgradesList from "./UpgradesList";
const ButtonClick = ({
  setCurrency,
  planetPC,
  currency,
  destroyedPlanets,
  setDestroyedPlanets,
  upgrades,
  setPlanetPC,
}) => {
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
      />
    </div>
  );
};

export default ButtonClick;
