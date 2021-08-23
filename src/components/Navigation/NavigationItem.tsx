import React, {FunctionComponent, useCallback, useMemo } from 'react';
import styles from "./Navigation.module.scss";
import cn from "classnames";
import { NavItem } from "../../content/verbs";
import { Link } from "react-router-dom"

export interface NavigationItemProps {
    item: NavItem;
    onClick(id: number): void;
    active: boolean;


}



const NavigationItem:FunctionComponent<NavigationItemProps> = ({
 item,
    onClick,
    active,

}) => {

     const onClickHandler = useCallback(() => {
             onClick(item.id)
     },[item.id, onClick]);

     const classNames = useMemo(()=>cn({
         [styles.navigationItem] : true,
         [styles.navigationItem_active]: active
     }),[active])


    return (
        <Link className={classNames} onClick={onClickHandler} to={item.path}>
            {item.title}
        </Link>
    );
};

export default NavigationItem;
