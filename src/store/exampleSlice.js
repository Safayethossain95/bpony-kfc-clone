// src/store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
    todos:[],
    cart:[],
    isOpen:false,
  },

  reducers: {
    clearCart:(state)=>{
      state.cart=[]
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.foodname === action.payload.foodname
      );

      if (existingItem) {
        // Increment the quantity of the existing item
        existingItem.quantity += 1;
      } else {
        // Add the new item with an initial quantity of 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.foodname === action.payload.foodname);
      if (item) {
        item.quantity += 1; // Increment the quantity
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.foodname === action.payload.foodname);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrement the quantity but ensure it doesn't go below 1
      } else if (item && item.quantity === 1) {
        // Optionally remove the item from the cart when quantity is 1
        state.cart = state.cart.filter(cartItem => cartItem.foodname !== action.payload.foodname);
      }
    },
    
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    addTodo: (state,action)=>{
      state.todos.push(action.payload);
    },
    removeTodo: (state,action)=>{
      state.todos.splice(action.payload,1)
    },
    editTodo: (state, action) => {
      const { index, task } = action.payload;
      state.todos[index] = task; // Directly update the task at the given index
  },

  toggleOpen: (state) => {
    state.isOpen =true;
  },
  toggleClose:(state)=>{
    state.isOpen = false;
  }
  
  }
});
export const selectTotalPrice = (state) => {
  return state.example.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const { toggleOpen,toggleClose,increment, decrement, setValue,addTodo,clearCart,
  removeTodo,addToCart,decrementQuantity,incrementQuantity,
  editTodo } = exampleSlice.actions;
export default exampleSlice.reducer;
