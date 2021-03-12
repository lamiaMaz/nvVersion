import React from 'react'
import { makeStyles,withStyles, Card,CardMedia,CardContent,CardActions,Collapse,Divider,MenuItem,InputAdornment,Link,
  Avatar,IconButton,Typography ,Menu,ListItemIcon,ListItemText,FormControlLabel,TextField,Box } from '@material-ui/core';
import clsx from 'clsx';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import Commentaire from './commentaire'
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import {MdFavorite} from 'react-icons/md'


                             {/**css de page */}

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  
    '& .MuiInputBase-input':{
      height:40,
        },
    hide:{
      display:'none',
       },
  }));

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      
    },
  }))(MenuItem);

                    {/**debut de fonction */}


export default function Publication() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [Masquer, setMasquer] = React.useState(true);


    
    const MasquerClick = () => {
      
      setMasquer(!Masquer);
    };
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
      
    return (
        <div>


           <Card className={classes.root}  className={clsx( {
                        [classes.hide]: !Masquer,
                      })}>

                                
                

                                 {/*********publication content  ********/}


                <CardContent>
                   {/*********publication header ********/}


                      <Box display='flex'style={{marginBottom:20}}>

                            <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/face.png'} />

                                      
                            <Typography style={{ fontSize: 17,  flexGrow: 1,marginLeft:20}}> 
                            <a >Anna Sthesia</a> <br/>
                            <small style={{ fontSize: 15, color:'#777d74'
                                }}>1 Mars 2021</small>
                            </Typography>

                            <IconButton onClick={handleClick} 
                        
                        >
                                            <MoreVertIcon  />
                                          </IconButton>
                       </Box>

                                  
                       
                          <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                className={clsx( {
                                  [classes.hide]: !Masquer,
                                })}
                          >


                                 <StyledMenuItem >

                                      <ListItemIcon>
                                        <SaveAltOutlinedIcon fontSize="small" />
                                      </ListItemIcon>

                                      <ListItemText >
                                        <Typography>
                                        Enregistrer 
                                        </Typography>
                                      </ListItemText>
                                   </StyledMenuItem>

                                  <StyledMenuItem 
                                  component="button"
                                  onClick={MasquerClick}>

                                      <ListItemIcon>
                                        <ClearRoundedIcon fontSize="small" />
                                      </ListItemIcon>

                                      <ListItemText >
                                        <Typography>
                                       <a
                                        
                                       > Masquer</a><br/><small>la publication sera masquée seulement de votre fil 
                                          d' actualité</small> 
                                        </Typography>
                                      </ListItemText>
                                  </StyledMenuItem>

                                  
                          </StyledMenu>


                      <Typography variant="body2" color="textSecondary" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                      Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                        Cras elementum ultrices diam. Maecenas ligula massa, varius a.
                      </Typography>

                </CardContent>

                                                 {/*********publication photo ********/}

                <CardMedia
                  className={classes.media}
                  image={process.env.PUBLIC_URL + '/images/pub.jpg'}
                  title="Paella dish"
                />
                
                                                 {/*********publication icons ********/}

                <CardActions disableSpacing>




               <FormControlLabel

                        control={<Checkbox icon={<FavoriteBorder style={{ color:'red'}}/>} 
                        checkedIcon={<Favorite />} name="checkedH" />}
                        label="J'adore"
                        />

                        <IconButton aria-label="share" className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded, })}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                        >

                            <ChatIcon style={{color:'#fcdd00'}} />

                        </IconButton>

                      
                        <IconButton aria-label="share">

                          <ShareIcon style={{color:'#50b5ff'}} />

                        </IconButton>

                                
                </CardActions>
<Divider/>

                      {/*********commentaires ********/}

                <Collapse in={expanded} timeout="auto" unmountOnExit>

                      <CardContent>

                          <TextField 

                                    fullWidth placeholder="ajouter un commentaire" variant="outlined"  
                                    className={classes.root}
                                    style={{ marginBottom:10,}}
                                    InputProps={{
                                      endAdornment: 
                                      <InputAdornment position="end">
                                        
                                            <Link
                                          component="button"
                                          variant="body2" >
                                          publier
                                        </Link>

                                    </InputAdornment>,
                                    }}


                          />

                             <Commentaire/>

                      </CardContent>

                </Collapse>

              </Card>
        </div>
    )
}
