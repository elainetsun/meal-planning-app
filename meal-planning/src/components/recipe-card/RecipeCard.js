import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
  root: {
    flex: '0 1 18%'
  },
  cardHeader: {
    background: 'lightblue'
  },
  actions: {
    justifyContent: 'space-between',
  },
  deleteIcon: {
    marginLeft: 'auto'
  }
}));

const RecipeCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Recipe Name" className={classes.cardHeader}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Summary Text
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actions}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>     
        <IconButton aria-label="add to favorites" className={classes.deleteIcon} >
          <DeleteIcon />
        </IconButton>  
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default RecipeCard;