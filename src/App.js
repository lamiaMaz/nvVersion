import React,{ useState } from 'react';
import Actualite from './components/actualite/actualite'
import GroupesList from './components/groupes/groupesList'
import Profil from './components/profil/profil'
import Groupe from './components/groupes/groupe'
import Page from './components/groupes/page'
import MyProfil from './components/profil/myProfil'
import Signin from './components/connexion/signin'
import SignUp from './components/connexion/signUp'


import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div >
     
 <BrowserRouter>  
 <div>
 
 <Switch>
  <Route path='/groupesList' component={GroupesList}/>
  <Route path='/actualite'  exact component={Actualite}/>
  <Route path='/profil'   component={Profil}/>
  <Route path='/groupe'   component={Groupe}/>
  <Route path='/page'   component={Page}/>
  <Route path='/myprofil'   component={MyProfil}/>
  <Route path='/signup'   component={SignUp}/>
  <Route path='/'   exact component={Signin}/>

 </Switch>
 </div>
 </BrowserRouter>


 
 
  
    </div> 
  );
}

export default App;
