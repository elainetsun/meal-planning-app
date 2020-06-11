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

const RecipeCard = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);

  const favoritedColor = favorite ? 'red' : '#0000008a';

  const handleFavoriteClick = (e) => {
    setFavorite(!favorite);
  };

  const handleDeleteClick = (e) => {
    const card = document.querySelector(`div[data-recipe-id="${recipe.id}"]`);

    if (window.confirm(`Are you sure you want to delete ${recipe.name}?`)) {
      card.remove();
    }
  };

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
            onClick={handleDeleteClick}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit recipe">
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RecipeCard;
