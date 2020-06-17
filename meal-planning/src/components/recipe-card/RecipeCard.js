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
import RecipeDialog from '../recipe-dialog/RecipeDialog';
import DeleteRecipeDialog from '../delete-recipe-dialog/DeleteRecipeDialog';

const RecipeCard = ({
  recipe,
  onRecipeDelete,
  onFavoriteSort,
  onRecipeEdit
}) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editRecipeDialogOpen, setEditRecipeDialogOpen] = useState(false);
  const favoritedColor = recipe.favorite ? 'red' : '#0000008a';

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleEditRecipeDialogOpen = () => {
    setEditRecipeDialogOpen(true);
  };

  const handleRecipeDelete = () => {
    setDeleteDialogOpen(false);
    onRecipeDelete(recipe);
  };

  const handleEditRecipeDialogClose = () => {
    setEditRecipeDialogOpen(false);
  };

  const handleFavoriteClick = () => {
    recipe.favorite = !recipe.favorite;
    onFavoriteSort();
  };

  return (
    <>
      <Card data-recipe-id={recipe.id} className={styles.card}>
        <CardHeader title={recipe.name} className={styles.header} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {recipe.description}
          </Typography>
          <div>
            <ul>
              {recipe.ingredients.map(i => {
                return <li key={`${i.name}`}>{`${i.quantity} - ${i.name}`}</li>;
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
            onClick={handleDeleteDialogOpen}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit recipe"
            onClick={handleEditRecipeDialogOpen}
          >
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>

      <RecipeDialog
        isOpen={editRecipeDialogOpen}
        onClose={handleEditRecipeDialogClose}
        onSubmit={onRecipeEdit}
        recipe={recipe}
      />

      <DeleteRecipeDialog
        isOpen={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        onDelete={handleRecipeDelete}
        recipe={recipe}
      />
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
