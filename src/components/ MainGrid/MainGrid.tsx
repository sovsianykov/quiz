import React, { FunctionComponent } from "react";
import { GridProps } from "./types";
import { Grid } from "@material-ui/core";
import GridItem from "./GridItem";
import styles from "./MainGrid.module.scss"

const MainGrid: FunctionComponent<GridProps> = ({ items }) => {
  const onClickHandler = () => {};

  return (

      <Grid container spacing={1} className={styles.gridContainer}  >
        {items.map((element) => (
          <Grid item
                md={2}
                sm={2}
                xs={12}
                key={element.id}>
            <GridItem
              item={element}

              onClick={onClickHandler}
            />
          </Grid>
        ))}
      </Grid>
  );
};

export default MainGrid;
