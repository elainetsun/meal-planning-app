import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './RecipeDialog.module.scss';
import PropTypes from 'prop-types';
import TagSelector from '../tag-selector/TagSelector';
import IngredientSelector from '../ingredient-selector/IngredientSelector';

const RecipeDialog = ({ isOpen, onClose, onSubmit, recipe }) => {
  const defaultRecipeState = {
    id: recipe ? recipe.id : Math.random() * 100,
    name: recipe ? recipe.name : '',
    description: recipe ? recipe.description : '',
    ingredients: recipe ? recipe.ingredients : [],
    favorite: recipe ? recipe.favorite : false
  };

  const [currentRecipe, setCurrentRecipe] = useState(defaultRecipeState);

  const handleClose = () => {
    setCurrentRecipe(defaultRecipeState);
    onClose();
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(currentRecipe);
    onClose();
  };

  const handleChange = event => {
    setCurrentRecipe({
      ...currentRecipe,
      [event.target.id]: event.target.value
    });
  };

  const handleIngredientChange = newIngredients => {
    const ingredients = [];
    if (newIngredients.length > 0) {
      newIngredients.forEach(i => {
        ingredients.push({
          id: i.name, //temporarily setting the ID of newly created / edited ingredients to their name to avoid key error
          name: i.name,
          quantity: Number(i.quantity)
        });
      });
    }
    setCurrentRecipe({ ...currentRecipe, ingredients });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">
          {recipe ? 'EDIT RECIPE' : 'ADD NEW RECIPE'}
        </DialogTitle>
        <DialogContent>
          <TextField
            id="name"
            label="Recipe Name"
            type="text"
            error={currentRecipe.name === ''}
            helperText={currentRecipe.name === '' ? 'Required*' : ''}
            defaultValue={currentRecipe.name}
            onChange={handleChange}
            fullWidth
          />
          <div className={styles.description}>
            <TextField
              id="description"
              label="Description"
              type="text-area"
              error={currentRecipe.description === ''}
              helperText={currentRecipe.description === '' ? 'Required*' : ''}
              defaultValue={currentRecipe.description}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <IngredientSelector
            onIngredientChange={handleIngredientChange}
            ingredients={currentRecipe.ingredients}
          />
          <TagSelector />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            type="submit"
            value="Submit"
            color="primary"
            disabled={!(currentRecipe.name && currentRecipe.description)}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

RecipeDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), //eventually should just be a number once we figure ingredient IDs out
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
      })
    ),
    favorite: PropTypes.bool.isRequired
  })
};

export default RecipeDialog;
