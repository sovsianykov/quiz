import React, {FunctionComponent} from 'react';
import styles from "./TimerTools.module.scss"
import Score from "./Score";

const TimerTools:FunctionComponent = () => {

    return (
        <nav className={styles.container}>
            <Score/>
        </nav>
    );
};

export default TimerTools;