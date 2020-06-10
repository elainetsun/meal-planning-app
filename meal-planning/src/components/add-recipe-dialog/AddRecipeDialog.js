import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import styles from "./AddRecipeDialog.module.scss";

const AddRecipeDialog = ({ handleDialogSumbit }) => {
  const defaultRecipeModalState = {
    isOpen: false,
  };
  const [recipeState, setRecipe] = React.useState(defaultRecipeModalState);

  const handleOpen = () => {
    setRecipe({
      ...setRecipe,
      isOpen: true,
    });
  };

  const handleClose = () => {
    setRecipe({ ...recipeState, isOpen: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    handleDialogSumbit(recipeState);
  };

  const handleChange = (event) => {
    setRecipe({
      ...recipeState,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className={styles.dialogContainer}>
      <Button size="small" onClick={handleOpen} endIcon={<AddCircleOutline />}>
        Add
      </Button>
      <Dialog
        open={recipeState.isOpen}
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
};

export default AddRecipeDialog;
