import { ADD_TO_CART, REMOVE_FROM_CART, START_ADD_TO_CART, FINISH_ADD_TO_CART, GET_PRODUCTS, START_GET_PRODUCTS, START_GET_DETAIL, GET_DETAIL, MINUS_CART_QUANTITY, PLUS_CART_QUANTITY } from "./actionTypes";
import axios from "axios"

let nextTodoId = 0;

export const startAddToCart = () => {

  try {
    return async dispatch => {
      dispatch({
        type: START_ADD_TO_CART
      });
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};



export const addToCart = item => {

  try {
    return async dispatch => {
      
      dispatch({
        type: ADD_TO_CART,
        payload: {...item, id: ++nextTodoId, quantity: 1 }
      });

      dispatch( finishAddToCart() );
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
export const finishAddToCart = () => {

  try {
    return async dispatch => {
      dispatch({
        type: FINISH_ADD_TO_CART
      });
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};

export const deleteProduct = item => ({
  type: REMOVE_FROM_CART,
  payload: item

});

export const plusQuantity = item => ({
  type: PLUS_CART_QUANTITY,
  payload: item

});
export const minusQuantity = item => ({
  type: MINUS_CART_QUANTITY,
  payload: item

});

export const getDetail = item => {

  try {
    return async dispatch => {
      dispatch({
        type: START_GET_DETAIL
      });

        dispatch({
          type: GET_DETAIL,
          payload: item,
          loading: true
        });

    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};


export const getProducts = () => {
  try {
    return async dispatch => {
      dispatch({
        type: START_GET_PRODUCTS
      });
      const res = await axios.get('https://amiiboapi.com/api/amiibo/');
      if (res.data) {

        let data = res.data.amiibo.map(e => { 
          return {...e, price: Math.floor(Math.random() * (2000 - 100 + 1) + 100)}
        })
        
        __DEV__ && console.log('getProducts action', data);
        dispatch({
          type: GET_PRODUCTS,
          payload: data,
          loadingAll: true
        });
      } else {
        __DEV__ && console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};