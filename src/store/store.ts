import { configureStore } from '@reduxjs/toolkit';

import authReducer from '@/slices/authSlice';
import modalReducer from '@/slices/modalSlice';
import recommendationReducer from '@/slices/recommandationSlice';
import uploadReducer from '@/slices/uploadSlice';
import userReducer from '@/slices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    upload: uploadReducer,
    recommendation: recommendationReducer,
    user: userReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
