import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './AddRecipeDialog.module.scss';
import TagSelector from '../tag-selector/TagSelector';
import IngredientSelector from '../ingredient-selector/IngredientSelector';

const AddRecipeDialog = ({ isOpen, handleDialogClose, handleDialogSumbit }) => {
  const defaultRecipeState = {
    id: Math.random() * 100,
    name: '',
    description: '',
    ingredients: []
  };

  const [recipeState, setRecipe] = useState(defaultRecipeState);

  const handleClose = () => {
    handleDialogClose();
    setRecipe(defaultRecipeState);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleDialogSumbit(recipeState);
    setRecipe(defaultRecipeState);
  };

  const handleChange = event => {
    setRecipe({
      ...recipeState,
      [event.target.id]: event.target.value
    });
  };

  const handleIngredientChange = newIngredients => {
    const ingredients = [];    
    if (newIngredients.length > 0) {
      newIngredients.forEach(i => {
        ingredients.push({
          id: i.ingredient,
          name: i.ingredient,
          quantity: i.quantity
        });
      });
      setRecipe({ ...recipeState, ingredients });
    } else {
      setRecipe({ ...recipeState, ingredients });
    }
  };

  return (
    <div className={styles.dialogContainer}>
      <Dialog
        className={styles.dialog}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">ADD NEW RECIPE</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              label="Recipe Name"
              type="text"
              error={recipeState.name === ''}
              helperText={recipeState.name === '' ? 'Required*' : ''}
              defaultValue={recipeState.name}
              onChange={handleChange}
              fullWidth
            />
            <div className={styles.description}>
              <TextField
                id="description"
                label="Description"
                type="text-area"
                error={recipeState.description === ''}
                helperText={recipeState.description === '' ? 'Required*' : ''}
                defaultValue={recipeState.description}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <IngredientSelector
              handleIngredientChange={handleIngredientChange}
            />
            <TagSelector />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" value="Submit" color="primary" disabled = {!(recipeState.name && recipeState.description)}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddRecipeDialog;
