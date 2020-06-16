import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IngredientSelector from '../ingredient-selector/IngredientSelector';
import styles from './AddIngredientDialog.module.scss';

const AddIngredientDialog = ({isOpen, handleDialogClose, handleDialogSubmit}) => {
  
  const [ingredientList, setIngredientList] = useState([]);
  
  const handleClose = () => {
        handleDialogClose();
        setIngredientList([]);
    };

  const handleSubmit = event => {
      event.preventDefault();
      handleDialogSubmit(ingredientList);
      setIngredientList([]);
  };
    
  const handleIngredientChange = newIngredients => {
    if (newIngredients.length > 0) {
      const ingredients = [];
      newIngredients.forEach(i => {
        ingredients.push({
          id: i.ingredient,
          name: i.ingredient,
          quantity: i.quantity
        });
      });
      setIngredientList(ingredients);
    } else{
      setIngredientList([]);
    }
  };

    return(
     <div>
    <Dialog
     className={styles.dialog}
     open={isOpen}
     onClose={handleClose}
     aria-labelledby="form-dialog-title"
    > 
     <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">ADD NEW INGREDIENT</DialogTitle>
          <DialogContent>
            <IngredientSelector
              handleIngredientChange={handleIngredientChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" value="Submit" color="primary" disabled = {ingredientList.length === 0}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
        </div>
    );
};

export default AddIngredientDialog;