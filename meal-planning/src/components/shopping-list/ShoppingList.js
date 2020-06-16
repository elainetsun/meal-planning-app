import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./ShoppingList.module.scss";
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import AddIngredientDialog from "../add-ingredient-dialog/AddIngredientDialog";
import defaultIngredients from './DefaultIngredients';

const ShoppingList = () => {
  const [checked, setChecked] = useState([-1]);
  const [currentList, setList] = useState(defaultIngredients);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDialogClose = () => {
    setIsModalOpen(false);
  };
  
  const handleDialogSubmit = newIngredients => {
    setIsModalOpen(false);
    setList(currentList.concat(newIngredients));
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
      <Button size="small" onClick = {openModal} endIcon={<AddCircleOutline />}>
          Add
      </Button>
      <AddIngredientDialog
          isOpen={isModalOpen}
          handleDialogSubmit={handleDialogSubmit}
          handleDialogClose={handleDialogClose}
        />
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
            <ListItemText id={checkLabelId} primary={value.quantity + " " + value.name} />
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
};


export default ShoppingList;
