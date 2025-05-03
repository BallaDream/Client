import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
//슬라이스 예시
interface IUserState {
  name: string;
  loggedIn: boolean;
}

const initialState: IUserState = {
  name: '',
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.name = action.payload;
      state.loggedIn = true;
    },
    logout(state) {
      state.name = '';
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
