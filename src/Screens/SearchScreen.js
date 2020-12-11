import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

const SearchScreen = (props) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const searchName = props.match.params.name ? props.match.params.name : "";
  const [category, setCategory] = useState("All");

  useEffect(() => {
    dispatch(listProducts(category, searchName));
  }, [dispatch, searchName, category]);
  return (
    <div>
      <div className="row search-bar">
        {products ? products.length : 0} Results
        <div className="row">
          <label>Category:</label>
          <select
            className="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Clothes</option>
            <option>Electronics</option>
            <option>Books</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger"> {error} </MessageBox>
          ) : (
            <div className="row center">
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
