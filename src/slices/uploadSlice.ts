import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TUploadState = 'idle' | 'success' | 'error';

interface IUploadSliceState {
  status: TUploadState;
  imageUrl: string | null;
  errorMsg: string | null;
}

const initialState: IUploadSliceState = {
  status: 'idle',
  imageUrl: null,
  errorMsg: null,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    uploadSuccess(state) {
      state.status = 'success';
    },
    uploadError(state, action: PayloadAction<string>) {
      state.status = 'error';
      state.errorMsg = action.payload;
    },
    resetUpload(state) {
      state.status = 'idle';
      state.imageUrl = null;
      state.errorMsg = null;
    },
    setImage(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.imageUrl = action.payload;
    },
  },
});

export const { uploadSuccess, uploadError, resetUpload, setImage } = uploadSlice.actions;
export default uploadSlice.reducer;
