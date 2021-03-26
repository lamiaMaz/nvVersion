import React from 'react';
//import Connexion from './components/connexion/connexion'
import Actualite from './components/actualite/actualite'
import GroupesList from './components/groupes/groupesList'
import Profil from './components/profil/profil'
import Groupe from './components/groupes/groupe'
import NavBar from './components/actualite/drawer';
import Page from './components/groupes/page'
import MyProfil from './components/profil/myProfil'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div >
 <BrowserRouter> 
 <div>
 <NavBar/>
 <Switch>
  <Route path='/groupesList' component={GroupesList}/>
  <Route path='/'  exact component={Actualite}/>
  <Route path='/profil'   component={Profil}/>
  <Route path='/groupe'   component={Groupe}/>
  <Route path='/page'   component={Page}/>
  <Route path='/myprofil'   component={MyProfil}/>


 </Switch>
 </div>
 </BrowserRouter>
    
  
    </div> 
  );
}

export default App;
