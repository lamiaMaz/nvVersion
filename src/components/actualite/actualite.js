import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Discussions from './Discussions';
import NavBar from './drawer';
import {Grid,Box} from '@material-ui/core';
import AddPub from "./addPub";
import Suggestions from "./suggestions";
import Publication from './publication'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontWeight: 400,
    fontStyle: 'normal',   
    fontSize: 14,
    lineHeight: 1.8,
    padding: 0,
    margin: 0,   
    color: '#777D74',
    background: '#fafafb',
    overflow: 'hidden',
  },
 
}));

function Actualite() {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
           <Container maxWidth="lg" style={{padding:0 ,}} >
       
          

        <Box display="flex" >

        <Grid item xs={2} >
        <NavBar/>
        </Grid>

        <Grid item xs={9} style={{ marginTop:110 }}
        >
          <Box display="flex" >
          <Grid item xs={8}  style={{ marginRight: 40 }}>
          <AddPub/>
          <Publication/>
        </Grid>
        <Grid item xs={4} >
       <Suggestions/>
        </Grid>
        </Box>
        </Grid>
        <Grid item xs={2} >
        
        <Discussions/>        </Grid>
        </Box>
      </Container>
      </Grid>
 
      </div>

    
  );
}

export default Actualite;