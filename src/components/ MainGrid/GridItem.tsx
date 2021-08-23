import React, {FunctionComponent, useCallback, useMemo, useState} from 'react';
import { GridItemProps } from "./types";
import styles from "./MainGrid.module.scss";
import cn from "classnames";
import { Button } from "@material-ui/core"
import { Verb } from "../../content/verbs";


const GridItem:FunctionComponent<GridItemProps> = ({item}) => {
    const [ card , setCard ] = useState<Verb>(item);
    const [ answer , setAnswer ] = useState<string>('');
    const [ trying , setTrying ] = useState<string>('CHEK');
    const classNames = useMemo(()=>cn({
            [styles.gridItem]: true,
             [styles.gridItem_active]: card.correctAnswered
    }),[card.correctAnswered])
    const onChangeHandler = useCallback((e) =>{
        e.preventDefault();
        setAnswer(e.currentTarget.value.toLowerCase());
    },[])
     const submitHandler =()=>{
        if (card.pastSimple === answer) {
            setCard({...item, correctAnswered:true})
            setTrying("CORRECT!")
        } else { setTrying("Wrong! Try again!")}

     }
    console.log(answer)

    return (
               <div className={classNames} >

                   <div className={styles.title}>{card.infinitive}</div>
                   <form  >
                       <input type="text" className={styles.answer}
                              value={answer}
                              onChange={onChangeHandler}/>
                       <Button onClick={submitHandler} >{trying}</Button>
                   </form >
                   <div className={styles.correct}>
                       {item.pastSimple}
                       <h3>CORRECT!</h3>
                   </div>
               </div>

    );
};

export default GridItem;
