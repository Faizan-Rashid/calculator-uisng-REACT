import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onBtnClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const newCalValue = eval(calVal);
      setCalVal(newCalValue);
    } else {
      const newCalValue = calVal + buttonName;
      setCalVal(newCalValue);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Display displayVal={calVal}></Display>
        <ButtonsContainer onBtnClick={onBtnClick}></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
