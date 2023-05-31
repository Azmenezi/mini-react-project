import React from "react";
import Currency from "./Currency";
import DestroyedPlanets from "./DestroyedPlanets";
import UpgradesList from "./UpgradesList";
import "../assets/css/style.css";
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
  return (
    <div className="ButtonClick-container">
      <div className="ButtonClick-littlecontainer">
        <div className="currency-container">
          <div className="currency-1">
            <p className="infoText">
              DPC = Destroyed Planets Per Click
              <br />
              DPS = Destroyed Planets Per Second
            </p>
          </div>
          <div className="currency-2">
            <Currency currency={currency} />
          </div>
        </div>
        <div className="destroyedPlanets-cont">
          <div>
            <DestroyedPlanets destroyedPlanets={destroyedPlanets} />
            <button
              className="mainButton"
              onClick={() => {
                setCurrency(currency + planetPC);
                setDestroyedPlanets(destroyedPlanets + planetPC);
              }}
            >
              Destroy a planet
            </button>
            <p className="descText">
              {planetPC} DPC and {perSecond} DPS
            </p>
          </div>
        </div>
        <p className="upgradesText">upgrades:</p>
        <div className="upgradeList-contatiner">
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
      </div>
    </div>
  );
};

export default ButtonClick;
