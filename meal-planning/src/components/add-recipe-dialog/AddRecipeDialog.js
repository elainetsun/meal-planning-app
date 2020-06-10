import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import styles from "./AddRecipeDialog.module.scss";

export default function AddRecipeDialog({
  isOpen,
  handleDialogClose,
  handleDialogSumbit,
}) {
  const defaultRecipeState = {
    name: "",
    description: "",
  };

  const [recipeState, setRecipe] = React.useState(defaultRecipeState);

  const handleClose = () => {
    handleDialogClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDialogSumbit(recipeState);
    setRecipe(defaultRecipeState);
  };

  const handleChange = (event) => {
    setRecipe({
      ...recipeState,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className={styles.dialogContainer}>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">ADD NEW RECIPE</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              label="Name"
              type="text"
              defaultValue={recipeState.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              id="description"
              label="Description"
              type="text"
              defaultValue={recipeState.description}
              onChange={handleChange}
              fullWidth
            />
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
}
