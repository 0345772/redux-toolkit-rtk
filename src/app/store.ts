import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { postAPI, userAPI, commentAPI } from '../features';



const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,

  [postAPI.reducerPath]: postAPI.reducer,

  [commentAPI.reducerPath]: commentAPI.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddle) => [...getDefaultMiddle(), postAPI.middleware, userAPI.middleware, commentAPI.middleware],
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
