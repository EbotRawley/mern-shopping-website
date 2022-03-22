import * as actionTypes from "../constants/cartConstants";
import axios from 'axios';
import { get } from "express/lib/response";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/$(id)`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload:{
            product: date._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};