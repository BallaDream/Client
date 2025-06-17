import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import router from './routes';

import { auth } from '@/api/auth/auth';
import { logout, setAccessToken, setNickname } from '@/slices/authSlice';

function App() {
  const dispatch = useDispatch();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        dispatch(logout());
        setIsAuthChecked(true);
        return;
      }

      try {
        await auth();
        const decoded: any = jwtDecode(token);
        dispatch(setAccessToken(token));
        dispatch(setNickname(decoded.nickname));
      } catch (error) {
        console.error('❌ 인증 실패:', error);
        dispatch(logout());
      } finally {
        setIsAuthChecked(true);
      }
    };

    verifyUser();
  }, [dispatch]);

  if (!isAuthChecked) return null; // 인증 검사 전에는 렌더링 보류

  return <RouterProvider router={router} />;
}

export default App;
