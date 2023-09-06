import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../utils/api";
import { UnknownAsyncThunkRejectedAction } from "@reduxjs/toolkit/dist/matchers";

interface IBooksState {
  bookList: Array<IBook>;
  searchData: ISearchData
  isLoading: boolean;
  error: string;
}

const initialState: IBooksState = {
  bookList: [],
  searchData: {
    keyword: '',
    category: '',
    sortBy: 'relevance',
    startIndex: 0
  },
  isLoading: false,
  error: "",
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (data: ISearchData) => {
    const res = await fetchBooks(data);
    return res;
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSearchData: (state, action: PayloadAction<ISearchData>) => {
      state.searchData = action.payload;
    },
    clearSearchData: (state) => {
      state.bookList = initialState.bookList;
      state.searchData = initialState.searchData;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        const list = action.payload.items.map((item: any) => {
          const {
            title,
            imageLinks,
            categories,
            category,
            description,
            authors,
          } = item.volumeInfo;
          return {
            id: item.id,
            title,
            image: imageLinks?.thumbnail,
            imageSmall: imageLinks?.smallThumbnail,
            categories: categories ? categories : [category],
            description,
            authors,
          };
        });
        state.bookList = state.bookList.concat(list);
      })
      .addCase(
        getBooks.rejected,
        (state, action: UnknownAsyncThunkRejectedAction) => {
          state.isLoading = false;
          state.bookList = initialState.bookList;
          state.error = action.error.message || initialState.error;
        }
      );
  },
});

export const { setSearchData, clearSearchData } = booksSlice.actions;

export default booksSlice.reducer;
