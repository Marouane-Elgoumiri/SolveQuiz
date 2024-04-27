
import userSlice from './usersSlice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        users: userSlice,
    }
});

export default store;