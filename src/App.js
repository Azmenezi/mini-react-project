import ButtonClick from "./components/ButtonClick";
import "./App.css";
import { useState } from "react";
import { upgrades } from "./upgrades";
function App() {
  const [currency, setCurrency] = useState(0);
  const [destroyedPlanets, setDestroyedPlanets] = useState(0);
  const [planetPC, setPlanetPC] = useState(1);

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
      />
    </div>
  );
}

export default App;
