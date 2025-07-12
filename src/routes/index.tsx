import { createBrowserRouter, Navigate } from 'react-router-dom';

import ModalRenderer from '@/components/modal/modalRenderer';

import MainLayout from '@/layouts/main/mainLayout';
import MyPageLayout from '@/layouts/my/myPageLayout';
import KakaoCallback from '@/pages/auth/kakaoCallback';
import HomePage from '@/pages/homePage/homePage';
import MyPage from '@/pages/myPage/myPage';
import ResultPage from '@/pages/resultPage/resultPage';
import SignupPage from '@/pages/signupPage/signupPage';
import UploadPage from '@/pages/uploadPage/uploadPage';

const router = createBrowserRouter([
  // 메인페이지
  {
    path: '/',
    element: (
      <MainLayout>
        <ModalRenderer />
      </MainLayout>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'result/:diagnoseId', element: <ResultPage /> },
      { path: 'upload', element: <UploadPage /> },
    ],
  },
  // 마이페이지
  {
    path: '/my',
    element: (
      <MyPageLayout>
        <ModalRenderer />
      </MyPageLayout>
    ),
    children: [
      { index: true, element: <Navigate to="/my/0" replace /> },
      { path: ':tabIndex', element: <MyPage /> },
    ],
  },

  // 카카오 로그인 콜백
  {
    path: '/auth/kakao/callback',
    element: <KakaoCallback />,
  },
]);

export default router;
