import React from 'react';
import clsx from 'clsx';
import { makeStyles,Box, useTheme ,Drawer,AppBar,Toolbar,List,CssBaseline,ListItemText,Paper,StylesProvider,
IconButton,InputBase,ListItemIcon,ListItem,Badge,Avatar,Button,Tooltip,withStyles,Divider,MenuItem,Link,
 Typography ,Menu, Card, MenuList } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {AiFillMessage} from "react-icons/ai";
import {FaHome} from "react-icons/fa";
import {HiUserGroup} from "react-icons/hi"
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {CgProfile} from "react-icons/cg";
import MenuIcon from '@material-ui/icons/Menu';
//import  "./drawer.css" ;



                         {/************css de page ***********/}
const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
 
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#fff',
    
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    marginBottom:10,
  },
  title: {
    width: 100,
    marginBottom:10,
    color: black,

  },
 hide:{
display:'none',
 },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  name:{
    marginTop: 12 ,
    marginLeft: 10 ,
    cursor: 'pointer',
    color:'black',
    fontWeight:500
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  
  search: {
    flexGrow: 0.3,
    height: 40,
    position: 'relative',
    borderRadius: 15,
    backgroundColor:' #f5fbff',
    border:'1px solid #f1f1f1',
    bottom: 5,
    height: 34,
    width: 52,
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#a09e9e',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  drawerPaper:{
    backgroundColor:'#50b5ff',
    width:230,
    overflowX:'hidden',
  },  
  drClose:{
    width:93,
    backgroundColor:'#50b5ff',
    overflowX:'hidden',

  },
  liste:{
  paddingTop:0,
  },
  
}));
 





          {/**************debut de fonction *********** */}
const NavBar= () => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  

  const handleClick = () => {
    
    setOpen(!open);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl1(null);
  };
  
  
    return (
      < StylesProvider  injectFirst >
   <div className={classes.root}>
       <CssBaseline />
                          {/********top menu *********/}

      <AppBar style={{backgroundColor:'#fff',height: 55, }} position="fixed" className={classes.appBar}>
                    
            <Toolbar>
                       
                <IconButton
                      color="inherit"aria-label="open drawer"
                      onClick={handleClick}edge="start" className={clsx(classes.menuButton)}
                      >
                        <MenuIcon style={{color:'#50b5ff'}}/>
                </IconButton>
                    

                <Typography variant="h6"className={classes.title} noWrap >
                          UniSwap
                </Typography>

                            {/********barre de recherche *********/}

                <div className={classes.search}>

                   <div className={classes.searchIcon}>
                          <SearchIcon style={{color:'#50b5ff'}} />
                    </div>

                    <InputBase
                       placeholder="Search…"
                      classes={{root: classes.inputRoot,input: classes.inputInput,}}inputProps={{ 'aria-label': 'search' }}
                        />

                </div>


                         {/********right buttons *********/}

               <Box display="flex"justifyContent="flex-end" flexGrow= {1}  style={{marginBottom: 10}}   >

                   <Tooltip disableFocusListener title="Profil">

                        <Button style={{textTransform:'lowercase'}}>
                           <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} style={{width: 40, height: 40}} />
                            <h6 href="#text-buttons" className={classes.name}> Lamia </h6>
                        </Button>

                   </Tooltip>

                             
                  <Tooltip disableFocusListener title="notifications">

                     <IconButton aria-label="show new notifications"  button onClick={handleClick1} aria-controls="notification"
                     style={{color:'#50b5ff',paddingTop: 0,paddingBottom: 0,height: 45,top: 7,}}>
                         
                          {/********notifications number*********/}

                          <Badge badgeContent={7} color="secondary">
                            <NotificationsIcon 
                             />
                          </Badge>
                     </IconButton>  

                  </Tooltip>
                    


                          {/********notifications liste*********/}


                     <Menu  

                          id="notification"
                          anchorReference="anchorPosition"
                          anchorPosition={{ top: 70, left: 1180 }}
                        
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}>


                         <Link href="#" color="inherit">

                                <MenuItem>

                               

                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'} 
                                 style={{ width: 50,height: 50, marginRight:25 }} />

                                <Typography>
                                <a  style={{ fontWeight: 600,marginRight:5}}>Paule Molive</a> a ajouté une nouvelle publication<br/>
                                <small>Il y a 1 minute </small> 
                                </Typography>
                                   
                                      
                                  </MenuItem>
                                  
                          </Link>


                          <Link href="#" color="inherit">
                                   <MenuItem>
   

                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/p5.jpg'} 
                                 style={{ width: 50,height: 50, marginRight:25 }} />

                                        <Typography>
                                        <a style={{ fontWeight: 600,marginRight:5}}>Anna Sthesia</a> Vous a envoyé une demande d'abbonement<br/>
                                        <small>Il y a 1 heure</small> 
                                        </Typography>
                                   
    
                                  </MenuItem>

                             </Link>



                             <Link href="#" color="inherit">
                                  <MenuItem>
   

                                <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/img2.jpg'} 
                                 style={{ width: 50,height: 50, marginRight:25 }} />

                                        <Typography>
                                        <a style={{ fontWeight: 600,marginRight:5}}>Master 2 ISI</a> Votre demande d'adhésion a été approuveé<br/>
                                        <small>Il y a 1 heur</small> 
                                        </Typography>
                                   
    
                                  </MenuItem>
                             </Link>
                                  
                              </Menu>

                      
                         
                  <Tooltip disableFocusListener title="Message">

                     <IconButton aria-label="show new mails"
                     
                     button onClick={handleClick2} aria-controls="messages"
                     style={{color:'#50b5ff',paddingTop: 0,paddingBottom: 0,height: 45,top: 7,}}>
                          
                           {/********messages number *********/}


                          <Badge badgeContent={4} color="secondary">
                            <AiFillMessage  />
                          </Badge>
                     </IconButton>

                  </Tooltip>



                        {/********messages liste*********/}


                        <Menu  

                        id="messages"
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 70, left: 1180 }}
                        keepMounted
                        open={Boolean(anchorEl1)}
                        onClose={handleClose2}
                        
                        style={{width:500}}
                        
                        >


                          <Button  href="#" style={{backgroundColor: '#50b5ff',textTransform: 'lowercase',
                          fontSize: 17,width:'100%',color:'white'}}>
                            Ouvrir dans Messagerie</Button>


                        <Link href="#" color="inherit">

                              <MenuItem>

                            

                              <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'} 
                              style={{ width: 50,height: 50, marginRight:25 }} />

                                      <Typography>
                                      <a  style={{ fontWeight: 600,marginRight:5}}>Paule Molive</a> <br/>
                                      <small  style={{ fontSize: 15, color:'#777d74'}}>salut Coucou CV bien?</small> 
                                      </Typography>
                                
                                    
                                </MenuItem>
                                
                        </Link>


                        <Link href="#" color="inherit">
                                <MenuItem>


                              <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/p5.jpg'} 
                              style={{ width: 50,height: 50, marginRight:25 }} />

                                      <Typography>
                                      <a style={{ fontWeight: 600,marginRight:5}}>Anna Sthesia</a>
                                      <br/>
                                      <small  style={{ fontSize: 15, color:'#777d74'}}>Bonjour</small> 
                                      </Typography>
                                

                                </MenuItem>

                          </Link>



                          <Link href="#" color="inherit">
                                <MenuItem>


                              <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/img2.jpg'} 
                              style={{ width: 50,height: 50, marginRight:25 }} />

                                      <Typography>
                                      <a style={{ fontWeight: 600,marginRight:5}}>Anna Sthesia</a>   <br/>
                                      <small  style={{ fontSize: 15, color:'#777d74'}}>Bonjour</small>                                   
                                      </Typography>
                                

                                </MenuItem>
                          </Link>
                                
                            </Menu>


                  <Tooltip disableFocusListener title="Déconnexion">

                        <IconButton aria-label="" style={{color:'#50b5ff',paddingTop: 0, paddingBottom: 0,height: 45,top: 7,}}>
                      
                            < PowerSettingsNewIcon />
                      
                        </IconButton>
                  </Tooltip>

              </Box>

            </Toolbar>
      </AppBar>


                          {/********sideNavBar *********/}

      <Drawer
                
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,})}
        
        classes={{
          paper: clsx({
            [classes.drClose]: !open,
            [classes.drawerPaper]: open,
          }),
          
        }}
      >
                  
          <List style={{marginTop:90}}>


              <ListItem button style={{paddingLeft: 16,paddingRight: 16,right: 5,left:5,marginBottom:15}}>

                  <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>

                      <FaHome style={{marginLeft: 10, marginBottom: 5,fontSize: 21}}/>

                      <Typography style={{color:'#fff',fontSize: 15}} 
                      className={clsx( {
                        [classes.hide]: open,
                      })}
                      
                      >Home</Typography>
                  </ListItemIcon >

                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}
                      >Home</Typography>
              </ListItem>



              <ListItem button style={{paddingLeft: 15,paddingRight: 16,right: 5,marginBottom:15}}>

                      <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>
                      <AiFillMessage style={{marginLeft: 23, marginBottom: 5,fontSize: 21}}/>
                      <Typography style={{color:'#fff',fontSize: 15}} 
                      className={clsx( {
                        [classes.hide]: open,
                      })}
                      
                      >Messages</Typography>
                      </ListItemIcon >
                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}

                      >Messages</Typography>
                      
                      
              </ListItem>




              <ListItem button style={{paddingLeft: 16,paddingRight: 16,right: 5,marginBottom:15}}>

                  <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>

                      <HiUserGroup style={{marginLeft: 20, marginBottom: 5,fontSize: 21}}/>

                      <Typography style={{color:'#fff',fontSize: 15}} 
                      className={clsx( {
                        [classes.hide]: open,
                      })}
                      
                      >Groupes</Typography>

                  </ListItemIcon >

                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}

                      >Groupes</Typography>

              </ListItem>





              <ListItem button style={{paddingLeft: 30,paddingRight: 16,right: 5,marginBottom:15}}>

                 <ListItemIcon  style={{color:'#fff',display: 'block',marginRight: 10}}>

                      <CgProfile style={{marginLeft: 8, marginBottom: 5,fontSize: 21}}/>

                      <Typography style={{color:'#fff',fontSize: 15 }} 
                      className={clsx( {
                        [classes.hide]: open,
                      })}
                      
                      >Profil</Typography>
                      
                </ListItemIcon >

                      <Typography style={{color:'#fff',fontSize: 18}}
                      className={clsx( {
                        [classes.hide]: !open,
                      })}

                      >Profil</Typography>

               </ListItem>



               <Typography style={{color:'#fff',fontSize: 16,marginTop: 80,marginLeft: 30,}}

                    className={clsx( {
                    [classes.hide]: !open, })}
                >

                    Copyright ©2021 <br/>All rights reserved <br/><span style={{marginLeft: 25,fontSize: 19}} >UniSwap</span>

               </Typography>

                      
                    
                    

                      
        </List>
                    
      </Drawer>
   </div>

   </StylesProvider >  

    )
}

export default NavBar
