import React, {
  FunctionComponent,
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";
import { GridItemProps } from "./types";
import styles from "./MainGrid.module.scss";
import cn from "classnames";
import { Button } from "@material-ui/core";
import { Verb } from "../../content/verbs";
import { useDispatch } from "react-redux";
import { ChangeScoreAction } from "../../redux/actions";

const GridItem: FunctionComponent<GridItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [card, setCard] = useState<Verb>(item);
  const [answer, setAnswer] = useState<string>("");
  const [trying, setTrying] = useState<string>("CHEK");
  const classNames = useMemo(
    () =>
      cn({
        [styles.gridItem]: true,
        [styles.gridItem_active]: card.correctAnswered,
      }),
    [card.correctAnswered]
  );
  const onChangeHandler = useCallback((e) => {
    e.preventDefault();
    setAnswer(e.currentTarget.value.toLowerCase());
  }, []);

  const submitHandler = () => {
    if (card.pastSimple === answer) {
      setCard({ ...card, correctAnswered: true });
      dispatch(ChangeScoreAction(1));
      setTrying("CORRECT!");
    } else {
      setTrying("Try again!");
      dispatch(ChangeScoreAction(-1));
    }
  };

  return (
    <div className={classNames}>
      <div className={styles.title}>{card.infinitive}</div>
      <form>
        <input
          type="text"
          className={styles.answer}
          value={answer}
          onChange={onChangeHandler}
        />
        <Button onClick={submitHandler}>{trying}</Button>
      </form>
      <div className={styles.correct}>
        {item.pastSimple}
        <h3>CORRECT!</h3>
      </div>
    </div>
  );
};

export default memo(GridItem);
