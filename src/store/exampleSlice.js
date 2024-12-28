// src/store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { backendAPI } from '../config/config';
const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
    todos:[],
    cart:[],
    isOpen:false,
    isOpenMaps:false,
   
  },

  reducers: {
    clearCart:(state)=>{
      state.cart=[]
    },
    loadCart:(state,action)=>{
      
      state.cart = action.payload  // Set cart to the response data
       
    },
    addToCart: async (state, action) => {
     
    
      try {
        // Ensure that only serializable data is sent to the backend
        const response = await axios.post(`${backendAPI}/cartpost`, {
          foodname: action.payload.foodname, // Ensure this is a simple string
          imgurl: action.payload.imgurl, // Simple string URL
          price: action.payload.price, // Simple number
          unit: action.payload.unit, // Simple string or number
          quantity:  action.payload.quantity // Simple number
        });
        state.cart =  response.data
        // You can handle the response if necessary
        console.log("Cart submitted successfully:", response.data);
        
      } catch (error) {
        // Handle error if the request fails
        console.error("Error submitting cart:", error);
      }
    },
    
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.foodname === action.payload.foodname);
    
      if (item) {
        // Increment the quantity
        
        
        // Send the updated item to the backend using Axios POST request
        axios.post(`${backendAPI}/cartpost`, {
          foodname: item.foodname,
          imgurl: item.imgurl, // Send any other relevant data
          price: item.price,
          unit: item.unit,
          quantity: 1 // Send the updated quantity
        })
        .then((response) => {
          
          console.log('Cart item updated successfully:', response.data);
          window.location.reload()
        })
        .catch((error) => {
          console.error('Error updating cart item:', error);
        });
      }
    },
    
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.foodname === action.payload.foodname);
    
      if (item) {
        if (item.quantity > 1) {
          // Decrement the quantity but ensure it doesn't go below 1
          item.quantity -= 1;
    
          // Send the updated item to the backend using Axios POST request
          axios.post(`${backendAPI}/cartdecrement`, {
            foodname: item.foodname,
            quantity: 1 // Decrement the quantity by 1
          })
          .then((response) => {
            console.log('Cart item updated successfully:', response.data);
            window.location.reload(); // Reload the page after updating
          })
          .catch((error) => {
            console.error('Error updating cart item:', error);
          });
        } else if (item.quantity === 1) {
          // Remove the item from the cart when quantity is 1
          state.cart = state.cart.filter(cartItem => cartItem.foodname !== action.payload.foodname);
    
          // Send the removal to the backend
          axios.post(`${backendAPI}/cartDecrement`, {
            foodname: item.foodname,
            quantity: 1 // Decrement the quantity by 1
          })
          .then((response) => {
            console.log('Cart item removed successfully:', response.data);
            window.location.reload(); // Reload the page after removing the item
          })
          .catch((error) => {
            console.error('Error removing cart item:', error);
          });
        }
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
  },
  toggleMapsOpen: (state) => {
    state.isOpenMaps =!state.isOpenMaps;
  },
  
  }
});
export const selectTotalPrice = (state) => {
  return state.example?.cart?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const { toggleOpen,toggleClose,increment, decrement, setValue,addTodo,clearCart,
  removeTodo,addToCart,decrementQuantity,incrementQuantity,toggleMapsOpen,
  editTodo,loadCart } = exampleSlice.actions;
export default exampleSlice.reducer;
