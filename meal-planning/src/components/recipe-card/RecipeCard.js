import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./RecipeCard.module.scss";
import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  return (
    <Card className={styles.card}>
      <CardHeader title={recipe.name} className={styles.header} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.actions}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites" className={styles.deleteIcon}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

RecipeCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default RecipeCard;
