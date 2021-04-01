import withRoot from './modules/withRoot';
import React from 'react';
import './style.css'

import ProductHero from './modules/views/ProductHero';

import AppAppBar from './modules/views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
     
    
      
    </React.Fragment>
  );
}

export default withRoot(Index);
