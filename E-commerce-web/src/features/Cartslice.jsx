import { createSlice } from '@reduxjs/toolkit'
import Productdata from '../Productdata';

const initialState = {
    cart: [],
    items: Productdata,
    totalQuantity: 0,
    totalPrice: 0,
};

const cardSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {

        addtocart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            }
            else {
                state.cart.push(action.payload);
            }
        },
        
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("carttotal", cartTotal);
                    console.log("cartitem", cartItem);
                    const { price, quantity } = cartItem;
                    console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            if (item) {
                item.quantity += 1;

            }
        },

        decreaseItemQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload)
            if (item) {
                item.quantity -= 1;

            }
        },
        addToWishlist: (state, action) => {
            const itemExists = state.items.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.items.push(action.payload);
            }
        },

        removeFromWishlist: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
          },


    }

})

export const { addtocart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity,addToWishlist,removeFromWishlist } = cardSlice.actions;
export default cardSlice.reducer;