import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './ShoppingList.module.scss';
import Button from '@material-ui/core/Button';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import AddIngredientDialog from '../add-ingredient-dialog/AddIngredientDialog';
import RecipeService from '../../services/RecipeService';

const ShoppingList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentList, setList] = React.useState(RecipeService.getIngredients());

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDialogClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = id => () => {
    const newList = currentList.filter(i => i.id !== id);
    setList(newList);
  };

  const handleDialogSubmit = newIngredients => {
    setIsModalOpen(false);
    setList(currentList.concat(newIngredients));
  };

  return (
    <>
      <div className={styles.header}>
        <h3>Shopping List</h3>
        <Button size="small" onClick={openModal} endIcon={<AddCircleOutline />}>
          Add
        </Button>
        <AddIngredientDialog
          isOpen={isModalOpen}
          handleDialogSubmit={handleDialogSubmit}
          handleDialogClose={handleDialogClose}
        />
      </div>

      <List className={styles.root}>
        {currentList.map(ingredient => {
          const checkLabelId = `checkbox-list-label-${ingredient.id}`;

          return (
            <ListItem
              key={ingredient.id}
              value={ingredient.name}
              role={undefined}
              dense
              button
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': checkLabelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={checkLabelId}
                primary={`${ingredient.quantity} - ${ingredient.name}`}
              />
              <ListItemSecondaryAction
                key={ingredient.id}
                value={ingredient}
                onClick={handleDelete(ingredient.id)}
              >
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
