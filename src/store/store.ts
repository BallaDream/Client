import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
