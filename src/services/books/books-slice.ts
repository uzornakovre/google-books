import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../utils/api";
import { UnknownAsyncThunkRejectedAction } from "@reduxjs/toolkit/dist/matchers";

interface IBook {
  title: string;
  image: string;
  imageSmall: string;
  category?: string;
  authors: Array<string>;
}

interface IBooksState {
  books: Array<IBook>;
  isLoading: boolean;
  error: string;
}

const initialState: IBooksState = {
  books: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.books = action.payload.items.map((item: any) => {
          const { title, imageLinks, categories, category, authors } =
            item.volumeInfo;
          return {
            title: title,
            image: imageLinks.thumbnail,
            imageSmall: imageLinks.smallThumbnail,
            category: categories ? categories[0] : category,
            authors: authors,
          };
        });
      })
      .addCase(
        getBooks.rejected,
        (state, action: UnknownAsyncThunkRejectedAction) => {
          state.isLoading = false;
          state.books = initialState.books;
          state.error = action.error.message || initialState.error;
        }
      );
  },
});

export default booksSlice.reducer;
