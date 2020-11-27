import React from 'react';
import Product from '../components/Product';
import data from '../data';

const HomeScreen = (props) => {
    return (
        <div>
        <div className="row center">
              {data.products.map(product => <Product key ={product._id} product={product} />)}
        </div>
      </div>
    );
};

export default HomeScreen;