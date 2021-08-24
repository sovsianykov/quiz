import React, { FunctionComponent, useEffect, useState } from "react";
import { interval, map, take } from "rxjs";
import styles from "./TimerTools.module.scss";

// interface TimerProps {
//   score: number;
// }

const Timer: FunctionComponent = () => {
  const [time, setTime] = useState<number>(60);

  const source$ = interval(1000).pipe(
    take(10),
    map(() => setTime(time - 1))
  );

  useEffect(() => {
    const subscription = source$.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, [source$, time]);

  return (
    <nav className={styles.score}>
      {time >= 0 ? (
        <p className={styles.value}> {time} seconds left</p>
      ) : (
          <p className={styles.value}> "GAME OVER"</p>

      )}
    </nav>
  );
};

export default Timer;
