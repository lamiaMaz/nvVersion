import React from 'react';
//import Connexion from './components/connexion/connexion'
import Actualite from './components/actualite/actualite'
import Groupes from './components/groupes/groupes'
import Profil from './components/profil/profil'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div >
 <BrowserRouter> 
 <Switch>
  <Route path='/groupes' component={Groupes}/>
  <Route path='/'  exact component={Actualite}/>
  <Route path='/profil'  exact component={Profil}/>

 </Switch>
 </BrowserRouter>
    
  
    </div> 
  );
}

export default App;
