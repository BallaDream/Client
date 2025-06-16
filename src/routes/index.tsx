import { createBrowserRouter } from 'react-router-dom';

import ModalRenderer from '@/components/modal/modalRenderer';

import MainLayout from '@/layouts/main/mainLayout';
import KakaoCallback from '@/pages/auth/kakaoCallback';
import HomePage from '@/pages/homePage/homePage';
import ResultPage from '@/pages/resultPage/resultPage';
import SignupPage from '@/pages/signupPage/signupPage';
import UploadPage from '@/pages/uploadPage/uploadPage';

// 라우팅설정(이것도 바꿔야됨)
const router = createBrowserRouter([
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
  {
    path: '/auth/kakao/callback',
    element: <KakaoCallback />,
  },
]);

export default router;
