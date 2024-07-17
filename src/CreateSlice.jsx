import { createSlice } from '@reduxjs/toolkit';

export const CreateSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name,image,cost}=action.payload;
      const existing=state.items.find((plant)=>plant.name===name);
      if(existing){
        existing.quantity++;
      }else{
        state.items.push({name,image,cost,quantity:1});
      }
    
    },
    removeItem: (state, action) => {
      state.items=state.items.filter((plant)=>plant.name!==action.payload); 
    },
    updateQuantity: (state, action) => {
      const {name,amount}=action.payload;
      const existing=state.items.find((plant)=>plant.name===name);
      if(existing){
        existing.quantity=amount;
      } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreateSlice.actions;

export default CreateSlice.reducer;
