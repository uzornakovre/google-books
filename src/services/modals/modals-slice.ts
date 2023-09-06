import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalsState {
  isBookInfoModalOpen: boolean;
}

const initialState: IModalsState = {
  isBookInfoModalOpen: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setBookInfoModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isBookInfoModalOpen = action.payload;
    },

    closeModals: () => {
      return initialState;
    },
  },
});

export const { setBookInfoModalOpen, closeModals } = modalsSlice.actions;

export default modalsSlice.reducer;
