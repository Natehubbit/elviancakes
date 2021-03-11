import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  useSelector as nativeUseSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { bottomSheetSlice } from './bottomSheet';

const rootReducer = combineReducers({
  [bottomSheetSlice.name]: bottomSheetSlice.reducer,
});

const persistConfig:PersistConfig<unknown, any, any, any> = {
  key: 'root',
  blacklist: [

  ],
  storage: AsyncStorage,
  timeout: 10000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<AppState> = nativeUseSelector;
