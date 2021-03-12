import React from "react";
import ReactDOM from "react-dom";
import{ Box,Typography,Avatar,} from '@material-ui/core';
import {MdFavorite} from 'react-icons/md'







function Commentaire() {
  return (
    <div  className="App">
   

      <Box display="flex"alignItems="center">
      <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} style={{ marginRight:20}} />
      <Typography style={{  fontSize: 16,
              }}>Anna Sthesia
          </Typography>
        
        </Box>  

        <Typography style={{ fontSize: 14,marginLeft:60,marginBottom:20}}>
             
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 <br/>
          <small style={{ fontSize: 13, color:'#777d74'
              }}>posté il y'a 1 minute</small> 
          </Typography>



          <Box display="flex"alignItems="center">
      <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} style={{ marginRight:20}} />
      <Typography style={{  fontSize: 16,
              }}>Anna Sthesia
          </Typography>
        
        </Box>  

        <Typography style={{ fontSize: 14,marginLeft:60,marginBottom:20}}>
             
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 <br/>
          <small style={{ fontSize: 13, color:'#777d74'
              }}>posté il y'a 1 minute</small>
          </Typography>


          <Box display="flex"alignItems="center">
      <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} style={{ marginRight:20}} />
      <Typography style={{  fontSize: 16,
              }}>Anna Sthesia
          </Typography>
        
        </Box>  

        <Typography style={{ fontSize: 14,marginLeft:60,marginBottom:20}}>
             
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 <br/>
          <small style={{ fontSize: 13, color:'#777d74'
              }}>posté il y'a 1 minute</small>
          </Typography>



     
     
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Commentaire />, rootElement);

export default Commentaire;