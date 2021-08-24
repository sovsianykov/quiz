import React, { FunctionComponent } from "react";
import styles from "./TimerTools.module.scss";
import { useTypesSelector } from "../../hooc/useTypesSelector";
import Timer from "./Timer";

const Score: FunctionComponent = () => {
  const { score } = useTypesSelector((state) => state.verbsReducer);
  return (
    <nav className={styles.score}>
      <Timer />
      your score is <span className={styles.value}>{score} </span>
    </nav>
  );
};

export default Score;
