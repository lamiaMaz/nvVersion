import React from 'react';
import {Grid,Container,Box,Hidden,Avatar,Card, CardContent,Typography} from '@material-ui/core';
import NavBar from '../actualite/drawer';
import Discussions from '../actualite/Discussions'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import AddPub from "../actualite/addPub";
import Publication from '../actualite/publication'
import SwipeableViews from 'react-swipeable-views';
 

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
 
               <Card>
                <CardContent>
                    


                  {/***********************************  nom utilisateur**************************************** */}

     <h6 style={{fontSize:23,fontWeight:700,textAlign:'center', marginTop: 35,marginBottom:30}}>Josephine Williams</h6>


                </CardContent>
            </Card>
         
        </Grid>



            {/***********************************  photo de profile**************************************** */}

        <Avatar className={classes.image}  src={process.env.PUBLIC_URL + '/images/profil.jpg'}/>


         {/*********************************** infos de compte**************************************** */}

                           
        <Grid   item xs={10} sm={9} md={10} lg={12 }xl={12} style={{  marginRight: 60 ,marginLeft: 60,}} >  
 


        <AppBar position="static" color="white">
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
          
     <Grid item xs={12} style={{ marginTop:10,}} >
         
         <Box display="flex" >
        

         <Grid item xs={12} sm={12} lg={8} style={{ marginRight: 15, }}>
           <Grid xs={12} sm={12} lg={12} >
           <Card style={{ marginBottom: 15, }}>

            <CardContent>
            

              <Typography>
                Bio

              </Typography>

              <Typography>
                          
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </Typography>
            </CardContent>

            </Card>
             </Grid>
         
         <Publication/>
       </Grid>
       <Grid item xs={4} sm={4} lg={4} >
         
       </Grid>
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