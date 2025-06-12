import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface AuthState {
  accessToken: string | null;
  nickname: string | null;
}

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken'),
  nickname: localStorage.getItem('nickname'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
      localStorage.setItem('nickname', action.payload);
    },
    logout(state) {
      state.accessToken = null;
      state.nickname = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('nickname');
    },
  },
});

export const { setAccessToken, setNickname, logout } = authSlice.actions;
export default authSlice.reducer;
