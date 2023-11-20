import { createSlice } from '@reduxjs/toolkit'


const initialState = {

  user:{
    id: null,
  },
  data : {
    "id": null,
    "name": null,
    "location": null,
    "charge_customers": null,
    "amount": {
    "category_6": null,
    "category_7": null,
    "category_8": null,
    "category_9": null,
    "category_10": null
    },
    },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action) => {
     
      state.user.id = action.payload.id;
      
    },
    setData: (state,action) => {
      
      state.data = action.payload;
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer