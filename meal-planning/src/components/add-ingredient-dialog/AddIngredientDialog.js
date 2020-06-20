import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IngredientSelector from '../ingredient-selector/IngredientSelector';

const AddIngredientDialog = ({ isOpen, onSubmit, onClose }) => {
  const [ingredientList, setIngredientList] = useState([]);

  const handleClose = () => {
    setIngredientList([]);
    onClose();
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(ingredientList);
    setIngredientList([]);
  };

  const handleIngredientChange = newIngredients => {
    if (newIngredients.length > 0) {
      const ingredients = [];
      newIngredients.forEach(i => {
        ingredients.push({
          id: Math.random() * 100,
          name: i.name,
          quantity: Number(i.quantity)
        });
      });
      setIngredientList(ingredients);
    } else {
      setIngredientList([]);
    }
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">ADD NEW INGREDIENT</DialogTitle>
          <DialogContent>
            <IngredientSelector onIngredientChange={handleIngredientChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              type="submit"
              value="Submit"
              color="primary"
              disabled={ingredientList.length === 0}
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddIngredientDialog;
