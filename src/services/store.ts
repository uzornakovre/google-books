import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './books/books-slice';
import modalsSlice from './modals/modals-slice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    modals: modalsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;