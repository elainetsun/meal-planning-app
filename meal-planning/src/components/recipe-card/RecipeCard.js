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
import DeleteRecipeDialog from '../delete-recipe-dialog/DeleteRecipeDialog';

const RecipeCard = ({ recipe , removeCard}) => {
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const favoritedColor = favorite ? 'red' : '#0000008a';

  const handleDeleteOpen = () => {
    setOpen(true);
  };

  const handleDeleteClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setOpen(false);
    removeCard(recipe);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <>
    <div>
      <Card data-recipe-id={recipe.id} className={styles.card}>
        <CardHeader title={recipe.name} className={styles.header} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.description}
          </Typography>
          <div>
            <ul>
              {recipe.ingredients.map(i => {
                return <li key={i.id}>{`${i.quantity} - ${i.name}`}</li>;
              })}
            </ul>
          </div>
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
            onClick={handleDeleteOpen}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit recipe">
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>

    <div>
      <DeleteRecipeDialog
        isOpen ={open}
        handleCardDelete={handleDelete}
        handleDialogClose={handleDeleteClose}
        recipe = {recipe}
      />
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
