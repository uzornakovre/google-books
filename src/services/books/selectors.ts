import { RootState } from "../store";

export const getSearchResult: (store: RootState) => Array<IBook> = 
  (store) => store.books.bookList;
export const getResultIsLoading: (store: RootState) => boolean = 
  (store) => store.books.isLoading;
export const getSearchData: (store: RootState) => ISearchData = 
  (store) => store.books.searchData;
export const getCurrentBook: (store: RootState) => IBook | null = 
  (store) => store.books.currentBook;
export const getTotalItems: (store: RootState) => number = 
  (store) => store.books.totalItems;