import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const AdminProductsScreen = (props) => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="row">
        <h1>Products</h1>
        <button
          className="primary"
          onClick={() => props.history.push("/addproducts")}
        >
          Add Product
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>BRAND</th>
            <th>CATEGORY</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {(products ? products : []).map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => props.history.push(`/product/${product._id}`)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsScreen;
