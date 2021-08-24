import React, { FunctionComponent } from 'react';
import styles from "./LimitedTime.module.scss";
import { useTypesSelector } from "../../hooc/useTypesSelector";
import MainGrid from "../../components/ MainGrid/MainGrid";
import MyArray from "../../Utils/utils";
import TimerTools from "../../components/TimerTools/TimerTools";

const LimitedTime:FunctionComponent = () => {


    const { cards  } = useTypesSelector(state => state.verbsReducer)
    const items = MyArray.shuffleArray(cards)
    return (
        <main className={styles.container}>
             <TimerTools/>
            <MainGrid items={items}/>
        </main>
    );
};

export default LimitedTime;
