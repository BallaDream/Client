import { configureStore } from '@reduxjs/toolkit';

import recommendationReducer from '@/slices/recommandationSlice';
import uploadReducer from '@/slices/uploadSlice';

export const store = configureStore({
  reducer: {
    upload: uploadReducer,
    recommendation: recommendationReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
