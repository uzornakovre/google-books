import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './books/books-slice';

const store = configureStore({
  reducer: {
    books: booksSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;