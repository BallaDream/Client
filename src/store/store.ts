import { configureStore } from '@reduxjs/toolkit';

import uploadReducer from '@/slices/uploadSlice';

export const store = configureStore({
  reducer: {
    upload: uploadReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
