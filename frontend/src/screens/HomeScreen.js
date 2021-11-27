import React from 'react';

import { data } from '../data';
import { Product } from '../components/Products';

export default function HomeScreen() {
  return (
    <div className='row center'>
      {data.products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
