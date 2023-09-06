import { RootState } from "../store";

export const getIsBookInfoModalOpen: (store: RootState) => boolean = 
  (store) => store.modals.isBookInfoModalOpen;