import React from 'react';
//import Connexion from './components/connexion/connexion'
import Actualite from './components/actualite/actualite'
import Groupes from './components/groupes/groupes'
import Profil from './components/profil/profil'
import GroupesPage from './components/groupes/groupesPage'
import NavBar from './components/actualite/drawer';

import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div >
 <BrowserRouter> 
 <div>
 <NavBar/>
 <Switch>
  <Route path='/groupes' component={Groupes}/>
  <Route path='/'  exact component={Actualite}/>
  <Route path='/profil'   component={Profil}/>
  <Route path='/groupesPage'   component={GroupesPage}/>


 </Switch>
 </div>
 </BrowserRouter>
    
  
    </div> 
  );
}

export default App;
