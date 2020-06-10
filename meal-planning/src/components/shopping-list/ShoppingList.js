import React from "react";
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import styles from "./ShoppingList.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));



function ShoppingList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const ingredients = ['2 bananas', '1/2 cup flour', '1 tsp salt', '1 tsp vanilla', '3 eggs'];

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
    <div className={styles.header}>
      <h3>Shopping List</h3>
    </div>
    <List className={classes.root}>

      {[0, 1, 2, 3, 4].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={ingredients[value]} />
          </ListItem>
        );
      })}
    </List>
    </>
  );
}

export default ShoppingList;
