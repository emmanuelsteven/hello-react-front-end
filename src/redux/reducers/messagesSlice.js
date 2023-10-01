import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000//api/greetings/random';

const fetchRandomGreeting = createAsyncThunk('messages/fetchRandomGreeting', async () => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  messages: '',
};
const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      const receivedData = action.payload;
      return { ...state, messages: receivedData };
    });
  },
});

export { fetchRandomGreeting };
export default messagesSlice.reducer;
