import React from 'react';
import { Route } from 'react-router-dom';
import { Auth, Home } from './pages';

import './styles/_index.scss';

function App() {
  return (
    <div className='App'>
      <Route exact path={['/', '/login', '/register']} component={Auth} />
      
      <Route exact path='/profile' component={Home} />
    </div>
  );
}

export default App;
