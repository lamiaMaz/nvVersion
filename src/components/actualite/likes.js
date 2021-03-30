import React from 'react'
import { makeStyles,withStyles,List,ListItem,Avatar,IconButton,Typography ,ListItemIcon,} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {MdFavorite} from 'react-icons/md'
import Dialog from '@material-ui/core/Dialog';

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

    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
   
   
   
       like:{
       
        cursor:'Pointer',
          '&:hover':{
          color:'#50b5ff',
         },
        },
        

  })); 

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
     
    },
  
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top:0,
      color: theme.palette.grey[500],
    },
    titre:{
      fontSize:16,
      fontWeight:600,
      marginBottom:10,
    },
  });


  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography className={classes.titre} variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
      width: 350,
       
    },
  }))(MuiDialogContent);




export default function Likes() {

    const classes = useStyles();
    
    const [isRed, setIsRed] = React.useState(false)
    const [open, setOpen] = React.useState(false);
  
  
      
      
      const modalOpen = () => {
        setOpen(true);
      };
      const modalClose = () => {
        setOpen(false);
      };


    return (
        <div>
            <IconButton>
              <MdFavorite  style={{fontSize:'x-large' ,}}
                                   onClick={() => setIsRed(!isRed)} 
                                  color={isRed ? 'red' : 'black'}
                                
                                  />
                                  </IconButton>

                                   <a
                                     className={classes.like}
                                     component="button"
                                     onClick={modalOpen} 
                                    
                                    >
                                     100 J'aime</a>

                                
                              {/**mentions J'aime **/}

                    <Dialog  onClose={modalClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={modalClose}>
                        Mentions j'aime
                    </DialogTitle >
                    <DialogContent  dividers>
                        <List>
                        <ListItem >

                        <ListItemIcon>

                            <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'}  />
                            
                            </ListItemIcon>

                            <Typography style={{fontSize:16,  }}>  <a >Anna Sthesia</a> <br/></Typography>
                            

                        </ListItem>


                        
                        
                        </List>
                    </DialogContent>
                              
      </Dialog>
        </div>
    )
}
