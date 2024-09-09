import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isAuthentication: false,
    access_token: null,
    user: null,
    allUser: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        signInRedux: (state, action) => {
            console.log(action.payload)
            state.user= action.payload
            state.isAuthentication = true
            state.access_token = action.payload
        },

        allUserRedux: (state, action) => {
            // console.log(action.payload)
           state.allUser = action.payload
        //    state.access_token = action.payload.t
        }
    }
})

export const {signInRedux, allUserRedux} = authSlice.actions
export default authSlice.reducer