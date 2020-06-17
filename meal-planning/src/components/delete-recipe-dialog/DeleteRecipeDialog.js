import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteRecipeDialog = ({ isOpen, onDelete, onClose, recipe }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => onClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Delete the recipe for ' + recipe.name.toLowerCase() + '?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The recipe will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()} color="primary">
            No
          </Button>
          <Button onClick={() => onDelete()} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteRecipeDialog;
