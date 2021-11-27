import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className='grid-container'>
      <header className='row'>
        <div>
          <Link to='/' className='brand'>
            Jack's Tea
          </Link>
        </div>
        <div>
          <Link to='cart.html'>
            Cart
            {cartItems.length > 0 && (
              <span className='badge'>{cartItems.length}</span>
            )}
          </Link>
          <Link to='signin.html'>Sign In </Link>
        </div>
      </header>
      <main>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route path='/product/:id' component={ProductScreen} exact></Route>
        <Route path='/cart/:id?' component={CartScreen}></Route>
      </main>
      <footer className='row center'>All right reserved</footer>
    </div>
  );
}

export default withRouter(App);
