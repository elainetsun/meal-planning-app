import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./ShoppingList.module.scss";


function ShoppingList() {
  const [checked, setChecked] = React.useState([-1]);
  const ingredients = ['2 bananas', '1/2 cup flour', '1 tsp salt', '1 tsp vanilla', '3 eggs'];
  const [currentList, setList] = React.useState(ingredients);

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

  const handleDelete = (value) => () => {
    const currentIndex = currentList.indexOf(value);
    const newList = [...currentList];
    newList.splice(currentIndex, 1);
    setList(newList);
  };

  return (
    <>
    <div className={styles.header}>
      <h3>Shopping List</h3>
    </div>

    <List className={styles.root}>

      {currentList.map((value) => {
        const checkLabelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={currentList.indexOf(value)} value={value} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': checkLabelId }}
              />
            </ListItemIcon>
            <ListItemText id={checkLabelId} primary={value} />
            <ListItemSecondaryAction key={currentList.indexOf(value)} value={value} onClick = {handleDelete(value)}>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </>
  );
}


export default ShoppingList;
