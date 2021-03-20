import React from 'react';
import {Grid,Container,Box,Hidden,Avatar,Card, CardContent,Typography,GridList, Divider,IconButton,Button,
TextField,DialogActions} from '@material-ui/core';
import NavBar from '../actualite/drawer';
import Discussions from '../actualite/Discussions'
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import AddPub from "../actualite/addPub";
import Publication from '../actualite/publication'
import SwipeableViews from 'react-swipeable-views';
import {FiEdit} from 'react-icons/fi';
import {AiOutlineCamera} from 'react-icons/ai'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//import DateFnsUtils from '@date-io/date-fns';
//import { MuiPickersUtilsProvider,KeyboardDatePicker,DatePicker,TimePicker,DateTimePicker,} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


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
      image:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 150,
        width: 150,
        bottom: 120,
        boxShadow: '0 6px 21px 0 rgb(0 0 0 / 12%)',
        border: '3px solid white',
    
      },
      
      root2: {
        marginBottom:20,
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  }));
 
  

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={5}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  
  
  
  






function Profil (){ 



  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [etat, setEtat] = React.useState({
    niveau: '',
  });

  const change = (event) => {
    const niveau = event.target.niveau;
    setEtat({
      ...etat,
      [niveau]: event.target.value,
    });
  };

    return (
        <div className={classes.root}>

           <Grid container spacing={2}>

           <Container maxWidth="lg"  style={{padding:0 ,}} >



             {/***********************************  Navbar**************************************** */}

                <Grid  lg={1} >
                   
                    <NavBar/>

                </Grid>



             {/*********************************** Top image**************************************** */}

                    <Grid item xs={10} sm={9} md={10} lg={12 }xl={12}className={classes.topimg} 
                    style={{ marginTop:100, marginRight: 60 ,marginLeft: 60,height:250 ,}} > 

                       <img ms={2} src={process.env.PUBLIC_URL + '/images/covert.jpg'}

                    style={{width:'100%',height:'100%',objectFit: 'cover',borderRadius: '20px 20px 0px 0px'}} />
 
              
                    


                  {/***********************************  nom utilisateur**************************************** */}
                  <Card>
                <CardContent>

     <h6 style={{fontSize:23,fontWeight:700,textAlign:'center', marginTop: 35,marginBottom:30}}>Josephine Williams <br/>
     <IconButton onClick={handleClickOpen}> <FiEdit  color='#212121' /></IconButton></h6>

      
                </CardContent>
            </Card>
            
        </Grid>



            {/***********************************  photo de profile**************************************** */}

        <Avatar className={classes.image}  src={process.env.PUBLIC_URL + '/images/profil.jpg'}/>





            {/***********************************  modifier le profil**************************************** */}



            <div>
     
                  <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    
                  >
                    <DialogTitle >
                    <Typography style={{color:'black', fontWeight:700,fontSize:18,textAlign:'center'}}>modifier le profil</Typography>

                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                                
                    </DialogTitle>
                    <DialogContent>
                      <Typography style={{color:'grey', fontWeight:600,marginBottom:15}}>Informations personnelles</Typography>
                    <form className={classes.root2}>
                            <TextField size="small"  variant="outlined" label="Nom"defaultValue="Mazouz" />
                            <TextField size="small"  variant="outlined" label="Prénom"defaultValue="Lamia" />
                            <TextField size="small" type="email"  variant="outlined" label="Adresse Mail"defaultValue="Mazouz@gmail.com" />
                            <TextField size="small" variant="outlined" label="date de naissance" defaultValue="23/12/96" />

                         {/** 
                       <MuiPickersUtilsProvider utils={DateFnsUtils}>
   
                                  <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Date de naissance"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{'aria-label': 'change date',}} />
                              
                            </MuiPickersUtilsProvider>
*/}


                            <TextField style={{width:'40ch'}} variant="outlined" label="Bio" multiline rows={4}
                            
                            defaultValue=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit," />

                    </form>

                    <Divider/>



                    <Typography style={{color:'grey', fontWeight:600,marginBottom:15,marginTop:20}}>Informations personnelles</Typography>
                    <form className={classes.root2}>
                            <TextField size="small"  variant="outlined" label="Université"defaultValue="Tizi-Ouzou" />
                            <TextField size="small"  variant="outlined" label="Faculté"defaultValue="Lamia" />
                            <TextField size="small"  variant="outlined" label="Département"defaultValue="Mazouz@gmail.com" />
                            <TextField size="small" variant="outlined" label="Spécialité" defaultValue="23/12/96" />
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel>Niveau</InputLabel>
                              <Select
                                native
                                value={etat.niveau}
                                onChange={change}
                                label="Niveau"
                                inputProps={{
                                  name: 'niveau',
                                 
                                }}
                              >
                                <option aria-label="None" value="Master 2" />
                                <option value={10}>L1</option>
                                <option value={20}>L2</option>
                                <option value={30}>L3</option>
                                <option value={30}>Master 1</option>
                                <option value={30}>Master 2</option>

                              </Select>
                            </FormControl>
                         
                

                    </form>
                    </DialogContent>



                    <DialogActions>
                      <Button variant="outlined" color="primary">
                        Modifier
                      </Button>
                      <Button variant="outlined" color="primary" autoFocus>
                       Annuler
                      </Button>
                    </DialogActions>
                  </Dialog>
    </div>
      

   







         {/*********************************** infos de compte**************************************** */}

                           
        <Grid   item xs={10} sm={9} md={10} lg={12 }xl={12} style={{  marginRight: 60 ,marginLeft: 60,}} >  
 


        <AppBar position="static" color="white" style={{marginTop:20}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          variant="scrollable"
          scrollButtons="on"
         
        >
          <Tab  style={{textTransform:'lowercase '}}label="publications" {...a11yProps(0)} />
          <Tab  style={{textTransform:'lowercase '}}label="à propos" {...a11yProps(1)} />
          <Tab style={{textTransform:'lowercase '}} label="abonnés et abonnements" {...a11yProps(2)} />
          <Tab  style={{textTransform:'lowercase '}}label="photos " {...a11yProps(3)} />
          <Tab  style={{textTransform:'lowercase '}}label="vidéos " {...a11yProps(4)} />
          <Tab  style={{textTransform:'lowercase '}}label="groupes et pages" {...a11yProps(5)} />
        </Tabs>

      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >




      {/*********************************** publications**************************************** */}

     <TabPanel value={value} index={0} dir={theme.direction}>
         {/*********************************** Bio**************************************** */}

         <Grid xs={12} sm={9} lg={9} xl={10}  style={{ marginLeft:60 }} >

<Card style={{ marginBottom: 25,marginLeft:150,borderRadius:20,backgroundColor: 'rgba(255, 255, 255, .15)',  
 backdropFilter: 'blur(5px)' }}>

 <CardContent>
 

  

   <Typography style={{ fontSize:15, }}>
               
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
         Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
         sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
   </Typography>
 </CardContent>

 </Card>
  </Grid>
          
     <Grid item xs={12} style={{ marginTop:10,}} >
         
         <Box display="flex" >
        

         <Grid item xs={12} sm={12} lg={8} style={{ marginRight: 25, }}>



            


              {/*********************************** pub**************************************** */}
         
         <Publication/>
       </Grid>


      {/***********************************groupes et photos **************************************** */}

    <Hidden only={['xs', 'sm']}>

       <Grid item xs={4} sm={4} lg={4} >
     




<Card style={{ marginBottom: 25,borderRadius:15 }}>
         <CardContent>
           <h6 style={{fontSize:17,fontWeight:700,marginTop: 10 ,marginBottom: 30,}}> Photo Gallery</h6>


           <GridList cellHeight={76}  className={classes.gridList} cols={3}>
        
            <img src={process.env.PUBLIC_URL + '/images/i9.jpg'}  />
            <img src={process.env.PUBLIC_URL + '/images/img.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/img5.jpg'} />
            <img src={process.env.PUBLIC_URL + '/images/img6.png'} />
       
      </GridList>
          
         </CardContent>
       </Card>





       <Card style={{ marginBottom: 25,borderRadius:15 }}>

<CardContent>


  <Typography style={{ marginBottom: 25,fontSize:19,fontWeight:700, }}>
    Mes groupes

  </Typography>
        <Box display='flex'style={{marginBottom:15,marginTop:10}}>

        <Avatar  src={process.env.PUBLIC_URL + '/images/i7.jpg'}/>

        <Typography style={{marginLeft:20,}}>
        <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
        <span style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
        </Typography>
        </Box>

<Divider/>

        <Box display='flex'style={{marginBottom:15,marginTop:10}}>

        <Avatar  src={process.env.PUBLIC_URL + '/images/i8.jpg'}/>

        <Typography style={{marginLeft:20,}}>
        <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>

       <span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span> 
        </Typography>

        </Box>

        <Divider/>



        <Box display='flex'style={{marginBottom:15,marginTop:10}}>

        <Avatar  src={process.env.PUBLIC_URL + '/images/i10.jpg'}/>

        <Typography style={{marginLeft:20,}}>
        <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
        <span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
        </Typography>

        </Box>

        <Divider/>



        <Box display='flex' style={{marginBottom:15,marginTop:10}}>
        <Avatar  src={process.env.PUBLIC_URL + '/images/img4.jpg'}/>

        <Typography style={{marginLeft:20,}}>
       <a href='#' style={{ fontSize:14,fontWeight:600,color:'black',textDecoration:'none'}}>WP Developers </a> <br/>
        <span  style={{ fontSize:12,color:'grey',marginLeft:10,}}>252 membres</span>
        </Typography>

        </Box>

         <Divider/>

</CardContent>

</Card>
       </Grid>

</Hidden>

       </Box>
       </Grid>


        </TabPanel>


    {/*********************************** a propos**************************************** */}

        <TabPanel value={value} index={1} dir={theme.direction}>
          Item One
        </TabPanel>



     {/***********************************  abonnes**************************************** */}

        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Two
        </TabPanel>



       {/*********************************** photos**************************************** */}

        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>


        {/***********************************  vidéos**************************************** */}

        <TabPanel value={value} index={4} dir={theme.direction}>
          Item 4
        </TabPanel>



        {/***********************************  groupes et pages**************************************** */}

        <TabPanel value={value} index={5} dir={theme.direction}>
          Item 5
        </TabPanel>


        </SwipeableViews>
</Grid>
      






                
                    <Grid item  >
                    <Hidden only={['xs','sm']}>
                    <Discussions/>     
                    </Hidden>

                </Grid>
                
           </Container>
           </Grid>




        </div>

    )
}export default Profil;