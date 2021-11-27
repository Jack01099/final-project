import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <a href='index.html' className='brand'>
            Jack's Tea
          </a>
        </div>
        <div>
          <a href='cart.html'>Cart</a>
          <a href='signin.html'>Sign In </a>
        </div>
      </header>
      <main>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route path='/product/:id' component={ProductScreen} exact></Route>
      </main>
      <footer className='row center'>All right reserved</footer>
    </div>
  );
}

export default withRouter(App);
