import {configureStore} from '@reduxjs/toolkit';
import dataReducer from "../features/data/dataSlice";
import {fakeApi} from '../services/fakeApi';

export const store = configureStore({
    reducer:{
        data:dataReducer,
        [fakeApi.reducerPath] : fakeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(fakeApi.middleware),
})