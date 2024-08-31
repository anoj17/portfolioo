import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isAuthentication: false,
    access_token: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        signInRedux: (state, action) => {
            // console.log(action.payload)
            state.user= action.payload
            state.isAuthentication = true
            // state.access_token = action.payload.
        },
    }
})

export const {signInRedux } = authSlice.actions
export default authSlice.reducer