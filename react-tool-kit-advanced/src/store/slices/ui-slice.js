import {createSlice} from '@reduxjs/toolkit';


const uiSlice = createSlice({
    name:'ui',
    initialState:{cartIsVisibe: false, notification: null, enableNotification:false},
    reducers: {
        toogle(state){
            state.cartIsVisibe = !state.cartIsVisibe;
        },
        showNotification(state, action){
            state.notification = {
                status:action.payload.status,
                title:action.payload.title,
                message: action.payload.message
            }
        },
        flagNotification(state){
            state.enableNotification = !state.enableNotification;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;