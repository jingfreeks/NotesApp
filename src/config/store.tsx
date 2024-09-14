import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {apiSlice} from './apiSlice';
import authReducer from '../slice/auth';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}



const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer<any>(persistConfig, rootReducer)

export const setupStore = (preloadedState?:Partial<RootState>)=>configureStore({
  reducer: persistedReducer,
  // reducer:rootReducer,
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({ serializableCheck: false}).concat(apiSlice.middleware),
  devTools: true,
  preloadedState
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store =setupStore({});
export const persiststore = persistStore(store)

setupListeners(store.dispatch);
