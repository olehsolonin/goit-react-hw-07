import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b89eca3ce57325ac77a898.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
	try {
		const response = await axios.get('/contacts');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
