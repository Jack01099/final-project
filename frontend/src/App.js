import React from 'react';
import {data} from './data';
import {Product} from './components/Products';

function App() {
  return (
    <div className="grid-container">
            <header className='row'>
                <div>
                    <a href="index.html" className="brand">Jack's Tea</a>
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In </a>
                </div>
            </header>   
            <main>
               <div className="row center">
                 {
                   data.products.map((product) => (
                    <Product product={product} />
                   ))
                 }
                   
                  {/*  End Product   */}
               </div>
            </main>
            <footer className="row center">
                All right reserved
            </footer>
        </div>
  );
}

export default App;
