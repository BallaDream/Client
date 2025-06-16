import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TModalType = 'login' | 'confirm' | null;

interface IModalState {
  modalType: TModalType;
}

const initialState: IModalState = {
  modalType: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TModalType>) => {
      console.log(action.payload);
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
