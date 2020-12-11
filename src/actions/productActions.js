import Axios from "axios";
import {
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = (category = "All", name = "") => async (
  dispatch
) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    console.log(name);
    const { data } = await Axios.get(
      `https://hatim-basta.herokuapp.com/api/products?category=${category}&name=${name}`
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: e.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(
      `https://hatim-basta.herokuapp.com/api/products/${productId}`
    );
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};

export const addProduct = (product, image) => async (dispatch, getState) => {
  dispatch({ type: PRODUCT_ADD_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "https://hatim-basta.herokuapp.com/api/products",
      product,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    const fd = new FormData();
    fd.append("image", image, image.name);
    await Axios.post(
      `https://hatim-basta.herokuapp.com/api/products/images/${data}`,
      fd,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: PRODUCT_ADD_SUCCESS });
  } catch (e) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.message,
    });
  }
};
