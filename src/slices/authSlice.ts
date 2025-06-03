/* eslint-disable prettier/prettier */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface AuthState {
  accessToken: string | null;
  nickname: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  nickname: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    logout(state) {
      state.accessToken = null;
      state.nickname = null;
    },
  },
});

export const { setAccessToken, setNickname, logout } = authSlice.actions;
export default authSlice.reducer;
