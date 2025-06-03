import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ModalState {
  isLoginModalOpen: boolean;
}

const initialState: ModalState = {
  isLoginModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal(state) {
      state.isLoginModalOpen = true;
    },
    closeLoginModal(state) {
      state.isLoginModalOpen = false;
    },
  },
});

export const { openLoginModal, closeLoginModal } = modalSlice.actions;
export default modalSlice.reducer;
