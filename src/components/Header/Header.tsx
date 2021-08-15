import React from 'react';
import styles from "./Header.module.scss"


const Header = () => {
    return (
        <header className={styles.header}>
               <h1 className={styles.title}> English verbs quiz</h1>
            <div className={styles.dragon_eye}/>
        </header>
    );
};

export default Header;
