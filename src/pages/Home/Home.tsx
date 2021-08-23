import React, {FunctionComponent, useEffect} from 'react';
import styles from "./Home.module.scss";
import {useTypesSelector} from "../../hooc/useTypesSelector";
import MainGrid from "../../components/ MainGrid/MainGrid";

const Home:FunctionComponent = () => {


    const { cards } = useTypesSelector(state => state.verbsReducer)
    console.log( cards[0])
    return (
        <main className={styles.home}>
             <MainGrid items={cards}/>
        </main>
    );
};

export default Home;
