import { createSlice } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'cars',
  initialState: { total: 0 },
  reducers: {
    setTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const { setTotal } = carSlice.actions;
export default carSlice.reducer;