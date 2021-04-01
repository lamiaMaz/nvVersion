import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =`${process.env.PUBLIC_URL + '/images/l1.jpg'}`;

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
   
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
    fontSize:25,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
     
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  titre:{
    textTransform: 'capitalize',
  }
});

function ProductHero(props) {
  const { classes } = props;
 
  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h3" marked="center" className={classes.titre}>
       Bienvenue à UniSwap
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
      Notre communauté Universitaire
      </Typography>
     
      <Typography variant="body2" color="inherit" className={classes.more}>
        Ne rattez pas l'éxperience  !!! 
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
