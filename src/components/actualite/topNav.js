import React from 'react'
import clsx from 'clsx';
import { makeStyles,Box, useTheme ,Drawer,AppBar,Toolbar,List,CssBaseline,Typography,Divider
,IconButton,fade,InputBase,ListItemIcon,ListItem,Badge,Avatar,Button,Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {AiFillMessage} from "react-icons/ai";

import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  
 
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
     
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width: 100,
  },
 
  hide: {
    display: 'none',
  },
 
  name:{
    marginTop: 12 ,
    marginLeft: 10 ,
    cursor: 'pointer',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  
  search: {
    flexGrow: 0.3,
    height: 40,
    position: 'relative',
    
    backgroundColor:' transparent',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      borderRadius: 15,
    },
   
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
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
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
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
  

}));

export default function TopNav() {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
        <div className={classes.root}>
      <CssBaseline />
      <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
      <AppBar
        position="fixed"
        
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
       
      >
        <Toolbar  style={{backgroundColor:'#fff'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"className={classes.title} noWrap>
               UniSwap
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Box display="flex"justifyContent="flex-end" flexGrow= {1}>
          <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
          <h6 href="#text-buttons" className={classes.name}>
                        Lamia 
                   </h6>
          
          <IconButton aria-label="show 17 new notifications"  color='white'>
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>          
            <IconButton aria-label="show 4 new mails" color="#fff">
              <Badge badgeContent={4} color="secondary">
                <AiFillMessage />
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="#fff">
          
                < KeyboardArrowDownIcon />
          
            </IconButton>
           
           </Box>
        </Toolbar>
      </AppBar>
      
      
      </div>
    )
}
