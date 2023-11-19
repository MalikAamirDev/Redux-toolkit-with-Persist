import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../api';

const initialState = {
  cartData: [],
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {cartData} = state;
      const itemPresentIndex = cartData.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemPresentIndex !== -1) {
        const updatedCartData = [...cartData];
        updatedCartData[itemPresentIndex] = {
          ...updatedCartData[itemPresentIndex],
          quantity: updatedCartData[itemPresentIndex].quantity + 1,
        };
        const total = updatedCartData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.price * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: updatedCartData,
          totalAmount: total,
        };
      } else {
        const finalData = [...cartData, {...action.payload, quantity: 1}];
        const total = finalData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.price * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: finalData,
          totalAmount: total,
        };
      }
    },
    removeFromCart: (state, action) => {
      const {cartData} = state;
      const itemPresentIndex = cartData.findIndex(
        item => item.id === action.payload,
      );
      if (itemPresentIndex !== -1) {
        const updatedCartData = [...cartData];
        if (updatedCartData[itemPresentIndex].quantity > 1) {
          updatedCartData[itemPresentIndex] = {
            ...updatedCartData[itemPresentIndex],
            quantity: updatedCartData[itemPresentIndex].quantity - 1,
          };
        } else {
          updatedCartData.splice(itemPresentIndex, 1);
        }

        const total = updatedCartData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.price * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: updatedCartData,
          totalAmount: total,
        };
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = CartSlice.actions;

export default CartSlice.reducer;
