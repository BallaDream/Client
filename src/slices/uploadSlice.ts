import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type TUploadState = 'idle' | 'success' | 'error';

interface IUploadSliceState {
  status: TUploadState;
  imageUrl: string | null;
  errorMessage?: string;
}

const initialState: IUploadSliceState = {
  status: 'idle',
  imageUrl: null,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    uploadSuccess(state, action: PayloadAction<string>) {
      state.status = 'success';
      state.imageUrl = action.payload;
    },
    uploadError(state, action: PayloadAction<string>) {
      state.status = 'error';
      state.errorMessage = action.payload;
    },
    resetUpload(state) {
      state.status = 'idle';
      state.imageUrl = null;
      state.errorMessage = undefined;
    },
  },
});

export const { uploadSuccess, uploadError, resetUpload } = uploadSlice.actions;
export default uploadSlice.reducer;
