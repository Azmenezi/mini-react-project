import ButtonClick from "./components/ButtonClick";
import "./App.css";
import { useEffect, useState } from "react";
import { upgrades } from "./upgrades";
function App() {
  const [currency, setCurrency] = useState(0);
  const [destroyedPlanets, setDestroyedPlanets] = useState(0);
  const [planetPC, setPlanetPC] = useState(1);
  const [perSecond, setPerSecond] = useState(0);
  let timer;
  const addPerSecond = () => {
    if (perSecond == 0) {
      return;
    } else {
      setCurrency(currency + perSecond);
    }
  };

  useEffect(() => {
    timer =
      !timer &&
      setInterval(() => {
        console.log("test");
        addPerSecond();
      }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
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
