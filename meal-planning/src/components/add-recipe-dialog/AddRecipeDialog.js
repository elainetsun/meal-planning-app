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
    id: Math.random()*100,
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

  const handleIngredientChange = newIngredients=> {
    if(newIngredients.length > 0 ) {
      const ingredients = [];
      newIngredients.forEach(i => {
        ingredients.push(`${i.quantity} - ${i.ingredient}`);
      });
      setRecipe({...recipeState, ingredients});
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
              defaultValue={recipeState.name}
              onChange={handleChange}
              fullWidth
            />
            <div className={styles.description}>
              <TextField
                id="description"
                label="Description"
                type="text-area"
                defaultValue={recipeState.description}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <IngredientSelector handleIngredientChange={handleIngredientChange}/>
            <TagSelector />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" value="Submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddRecipeDialog;
