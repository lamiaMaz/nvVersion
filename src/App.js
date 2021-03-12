import React from 'react';
//import Connexion from './components/connexion/connexion'
import Actualite from './components/actualite/actualite'
//import Actu from './components/actu/actu'
//import Insc from './components/inscription/insc'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div >
 <BrowserRouter> 
 <Switch>
  <Route path='/' component={Actualite}/>
 {/**  <Route path='/' component={Actu}/>
  <Route path='/Insc' component={Insc}/>
*/}
 </Switch>
 </BrowserRouter>
    
  
    </div> 
  );
}

export default App;
