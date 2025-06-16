import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import router from './routes';

import { setAccessToken, setNickname } from '@/slices/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      dispatch(setAccessToken(token));
      try {
        const decoded: any = jwtDecode(token);
        dispatch(setNickname(decoded.nickname));
      } catch (e) {
        console.error('❌ 토큰 디코딩 실패:', e);
      }
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
