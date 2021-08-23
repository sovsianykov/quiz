import React, { FunctionComponent, useState } from "react";
import styles from "./Navigation.module.scss";
import { navigation, NavItem } from "../../content/verbs";
import NavigationItem from "./NavigationItem";



const Navigation: FunctionComponent = () => {
  const [activeId, setActiveID] = useState<number>(1);
  const onClickHandler = (id:number) => {
      setActiveID(id)
  };
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        {navigation.map((item: NavItem) => (
          <NavigationItem key={item.id} item={item} onClick={onClickHandler}
                          active={activeId === item.id} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
