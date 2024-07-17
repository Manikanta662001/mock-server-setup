import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchusers = createAsyncThunk('/slice/fetchusers', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('/api/allusers')
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.error)
        }
        return result;
    } catch (error) {
        console.log(error.message)
        return rejectWithValue(error.message)
    }
})

const initialState = { users: [], errormsg: '', loading: false };
const fetchUsersSlice = createSlice({
    name: 'fetchUsers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchusers.pending, (state) => {
            state.loading = true;
            state.users = [];
            state.errormsg = '';
        })
        builder.addCase(fetchusers.fulfilled, (state, action) => {
            console.log("SUCC::")
            state.loading = false;
            state.users = action.payload;
            state.errormsg = '';
        })
        builder.addCase(fetchusers.rejected, (state, action) => {
            console.log("FAIL::", action)
            state.loading = false;
            state.users = [];
            state.errormsg = action.payload;
        })
    }
})
export default fetchUsersSlice.reducer;