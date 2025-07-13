import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  accessToken: string | null;
  nickname: string | null;
  isLogin: boolean;
}

const initialState: IAuthState = {
  accessToken: localStorage.getItem('accessToken'),
  nickname: localStorage.getItem('nickname'),
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<{ accessToken: string; nickname: string }>) {
      state.accessToken = action.payload.accessToken;
      state.nickname = action.payload.nickname;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('nickname', action.payload.nickname);
      state.isLogin = true;
    },
    setLogout(state) {
      state.accessToken = null;
      state.nickname = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('nickname');
      state.isLogin = false;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
