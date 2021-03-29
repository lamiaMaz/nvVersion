import React from "react";
import ReactDOM from "react-dom";
import{ Box,Typography,Avatar,TextField,Input,Link,InputAdornment, makeStyles,withStyles,} from '@material-ui/core';
import {MdFavorite} from 'react-icons/md'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    
     
      height:40,
     paddingTop:15,
     paddingBottom:15,
      borderRadius:10,
     
    },

    '& .MuiLink-underlineHover':{
     
      '&:hover':{
      textDecoration:'none',
     }
   

  },
  
   
  },

  
  

 
 
})); 



function Commentaire() {
  const [isRed, setIsRed] = React.useState(false)
  const classes = useStyles();

  return (
    <div  className="App">
   
{/****************************************publier un commentaire************************************************** */}


                      <TextField 

                      fullWidth placeholder="ajouter un commentaire" variant="outlined"  
                      className={classes.root}
                      style={{ marginBottom:10,}}

                      InputProps={{endAdornment: 
                        <InputAdornment position="end">
                          
                              <Link
                              className={classes.root}
                              component="button"
                            >
                            publier
                          </Link>


                      </InputAdornment>,
                      }}


                      />




{/****************************************afficher les commentaires******************************** */}

      <Box display="flex"alignItems="center">

                           {/****************photo de profil**************** */}

      <Avatar src={process.env.PUBLIC_URL + '/images/avatar.jpg'} style={{ marginRight:20}} />


                           {/****************nom utilisateur**************** */}

      <Typography style={{  fontSize: 16,}}>Anna Sthesia </Typography>
          
        </Box>  

                           {/****************contenu de commentaire**************** */}


        <Typography style={{ fontSize: 14,marginLeft:60,marginBottom:20}}>Lorem ipsum dolor sit amet<br/>


                                   {/****************date**************** */}


          <small style={{ fontSize: 13, color:'#777d74'}}>posté il y'a 1 minute</small> 


                           {/****************j'aime**************** */}

               <MdFavorite  style={{fontSize:16 ,marginLeft:5,position: 'relative',top: 3,left: 10, }}
                               onClick={() => setIsRed(!isRed)} color={isRed ? 'red' : 'black'}/>
          </Typography>



          
     
     
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Commentaire />, rootElement);

export default Commentaire;