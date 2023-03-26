
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMeds = createAsyncThunk(
  'meds/fetchMeds',
  async () => {
    const response = await axios.get('http://localhost:4000/meds');
    return response.data;
  }
);



const medSlice = createSlice({
  name: 'meds',
  initialState: { meds: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMeds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.meds = action.payload;
      })
      .addCase(fetchMeds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

  },
});

export default medSlice.reducer;

