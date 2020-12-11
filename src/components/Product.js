import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const { product } = props;

  return (
    <div className="card fixed-height">
      <Link to={`/product/${product._id}`}>
        <img
          className="medium"
          src={`https://hatim-basta.herokuapp.com/api/products/images/${product._id}`}
          alt={product.name}
        />
        {/* <i class="fa fa-plus-circle add"></i> */}
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2 className="small-title">
            {product.name}
            {/* <i className="fa fa-plus-square red"></i> */}
          </h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">
          <span className="red">$</span>
          {product.price}
        </div>
        <Link to={`/product/${product._id}`}>
          <div className="add">
            Add <i className="fa fa-plus-square red"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
