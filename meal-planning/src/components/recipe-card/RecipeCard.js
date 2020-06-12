import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styles from './RecipeCard.module.scss';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const RecipeCard = ({ recipe , removeCard}) => {
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);

  const favoritedColor = favorite ? 'red' : '#0000008a';

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };


  const handleDeleteConfirm = () => {
    if (removeCard) {
      removeCard(recipe);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = () =>{
    setOpen(false);
    setDeleteCard(true);
    handleDeleteConfirm();
  }

  return (
    <>
      <Card data-recipe-id={recipe.id} className={styles.card}>
        <CardHeader title={recipe.name} className={styles.header} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={styles.actions}>
          <IconButton
            aria-label="add to favorites"
            className={styles.favoriteIcon}
            style={{ color: favoritedColor }}
            onClick={handleFavoriteClick}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="delete recipe"
            className={styles.deleteIcon}
            onClick={handleClickOpen}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit recipe">
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>


      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete the recipe for " + recipe.name +"?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The recipe will be permanently deleted.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No, thanks!
            </Button>
            <Button onClick={handleCloseYes} color="primary" autoFocus>
              Yes, please!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string
  })
};

export default RecipeCard;
