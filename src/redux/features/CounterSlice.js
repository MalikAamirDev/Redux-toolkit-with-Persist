import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Value: 0,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  // actions
  reducers: {
    increment: state => {
      state.Value += 1;
    },
    decrement: state => {
      state.Value -= 1;
    },
    incrementByAmount: (state, actions) => {
      state.Value = actions.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
