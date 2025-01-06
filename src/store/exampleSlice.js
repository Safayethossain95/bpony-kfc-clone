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
  addToCart: (state, action) => {
    // Immer allows us to write "mutative" logic in reducers, but it actually produces a new state
    // based on the changes we make to the draft state.
    const existingItemIndex = state.cart.findIndex(item => item.foodname === action.payload.foodname);

    if (existingItemIndex >= 0) {
      // If the item already exists, increment the quantity
      state.cart[existingItemIndex].quantity += action.payload.quantity;
    } else {
      // Otherwise, add the new item to the cart
      state.cart.push(action.payload);
    }

    // Perform the async operation after updating the state
    axios.post(`${backendAPI}/cartpost`, {
      foodname: action.payload.foodname, // Ensure this is a simple string
      imgurl: action.payload.imgurl, // Simple string URL
      price: action.payload.price, // Simple number
      unit: action.payload.unit, // Simple string or number
      quantity: 1 // Simple number
    })
    .then(response => {
      console.log("Cart item added successfully:", response.data);
    })
    .catch(error => {
      // Handle error if the request fails
      console.error("Error submitting cart:", error);
    });
  },
    
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.foodname === action.payload.foodname);
    
      if (item) {
        // Increment the quantity
        item.quantity += 1;
    
        // Send the updated item to the backend using Axios POST request
        axios.post(`${backendAPI}/cartincrement`, {
          foodname: item.foodname,
          quantity: 1 // Increment the quantity by 1
        })
        .then((response) => {
          console.log('Cart item incremented successfully:', response.data);
    
          const updatedCart = state.cart.map((cartItem) => {
            // Update the matching food item in the cart
            if (cartItem.foodname === response.data.foodname) {
              return { ...cartItem, quantity: cartItem.quantity }; // Update state if needed
            }
            return cartItem; // Keep other items unchanged
          });
    
          state.cart = updatedCart; // Update the state.cart directly
        })
        .catch((error) => {
          console.error('Error incrementing cart item:', error);
        });
      } else {
        // If the item doesn't exist in the cart, optionally add it to the cart
        const newItem = {
          foodname: action.payload.foodname,
          quantity: 1 // Start with a quantity of 1
        };
    
        state.cart.push(newItem);
    
        // Optionally sync with backend
        axios.post(`${backendAPI}/cartincrement`, newItem)
          .then((response) => {
            console.log('New cart item added successfully:', response.data);
          })
          .catch((error) => {
            console.error('Error adding new cart item:', error);
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
            const updatedCart = state.cart
      .map((item) => {
        // Find the matching food item and decrement the quantity
        if (item.foodname === item.foodname) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else if (item.quantity === 1) {
            // If quantity reaches zero, filter out the item
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null); 
         state.cart = updatedCart; 
          })
          .catch((error) => {
            console.error('Error updating cart item:', error);
          });
        } else if (item.quantity === 1) {
          // Remove the item from the cart when quantity is 1
          state.cart = state.cart.filter(cartItem => cartItem.foodname !== action.payload.foodname);
    
          // Send the removal to the backend
          axios.post(`${backendAPI}/cartdecrement`, {
            foodname: item.foodname,
            quantity: 1 // Decrement the quantity by 1
          })
          .then((response) => {
            console.log('Cart item removed successfully:', response.data); // Reload the page after removing the item
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
