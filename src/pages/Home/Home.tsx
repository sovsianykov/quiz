import React, {FunctionComponent} from 'react';
import styles from "./Home.module.scss";
import {useTypesSelector} from "../../hooc/useTypesSelector";
import MainGrid from "../../components/ MainGrid/MainGrid";
import MyArray from "../../Utils/utils";

const Home:FunctionComponent = () => {


    const { cards  } = useTypesSelector(state => state.verbsReducer)
    const items = MyArray.shuffleArray(cards)
    return (
        <main className={styles.home}>
             <MainGrid items={items}/>
        </main>
    );
};

export default Home;
