import React from 'react';
import Rating from './Rating';

export const Product = (props) => {
  const { product } = props;
  return (
    <div div className='card' key={product._id}>
      <a href={`/products/${product._id}`}>
        {/* images size: 680px by 830px  */}
        <img className='medium' src={product.image} alt={product.name} />
      </a>
      <div className='card-body'>
        <a href='product.html'>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className='price'>&#36;{product.price}</div>
      </div>
    </div>
  );
};
