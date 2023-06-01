import ButtonClick from "./components/ButtonClick";
import "./assets/css/style.css";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { upgrades } from "./upgrades";
function App() {
  const [currency, setCurrency] = useState(0);
  const [destroyedPlanets, setDestroyedPlanets] = useState(0);
  const [planetPC, setPlanetPC] = useState(1);
  const [perSecond, setPerSecond] = useState(0);

  const addPerSecond = useCallback(() => {
    if (perSecond > 0) {
      setCurrency((prevCurrency) => prevCurrency + perSecond);
      setDestroyedPlanets((prevDestroyed) => prevDestroyed + perSecond);
    }
  }, [perSecond, setCurrency, setDestroyedPlanets]);

  useEffect(() => {
    let timer = setInterval(() => {
      addPerSecond();
    }, 1000);

    return () => clearInterval(timer);
  }, [addPerSecond]);
  const [used, setUsed] = useState(false);
  useEffect(() => {
    if (destroyedPlanets > 1000000000 && used === false) {
      setUsed((used) => (used = true));
      let mySound = new Audio("./media/horay.wav");
      mySound.play();
    }
  }, [destroyedPlanets, used]);
  return (
    <div className="mainCont">
      <ButtonClick
        currency={currency}
        setCurrency={setCurrency}
        planetPC={planetPC}
        destroyedPlanets={destroyedPlanets}
        setDestroyedPlanets={setDestroyedPlanets}
        upgrades={upgrades}
        setPlanetPC={setPlanetPC}
        perSecond={perSecond}
        setPerSecond={setPerSecond}
      />
    </div>
  );
}

export default App;
