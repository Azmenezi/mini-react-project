import "../assets/css/style.css";

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
  const decider = () => {
    if (upgrade.DPC > 0) {
      return (
        <>
          {upgrade.name}
          <br />
          DPC + {upgrade.DPC}
          <br />
          price: {upgrade.price}$
        </>
      );
    } else {
      return (
        <>
          {upgrade.name}
          <br />
          DPS + {upgrade.persecond}
          <br />
          price: {upgrade.price}$
        </>
      );
    }
  };

  return (
    <button
      className="upgradeButton"
      onClick={() => {
        let mySound = new Audio("./media/upgrade.wav");
        mySound.play();
        changeDPC();
        changePerSecond();
      }}
    >
      {decider()}
    </button>
  );
};

export default Upgrade;
