import { createBrowserRouter, Navigate } from 'react-router-dom';

import ProtectedRoute from '@/components/common/protectedRoute/protectedRoute';
import ModalRenderer from '@/components/modal/modalRenderer';

import MainLayout from '@/layouts/main/mainLayout';
import MyPageLayout from '@/layouts/my/myPageLayout';
import KakaoCallback from '@/pages/auth/kakaoCallback';
import HomePage from '@/pages/homePage/homePage';
import LeaveCompletePage from '@/pages/leaveCompletePage/leaveCompletePage';
import LeavePage from '@/pages/leavePage/leavePage';
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
      // 인증이 필요한 라우트들
      {
        path: 'upload',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <UploadPage /> }],
      },
      {
        path: 'result/:diagnoseId',
        element: <ProtectedRoute />,
        children: [{ index: true, element: <ResultPage /> }],
      },
    ],
  },
  // 마이페이지 (인증 필요)
  {
    path: '/my',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Navigate to="/my/0" replace />,
      },
      {
        path: ':tabIndex',
        element: (
          <MyPageLayout>
            <ModalRenderer />
          </MyPageLayout>
        ),
        children: [{ index: true, element: <MyPage /> }],
      },
    ],
  },
  {
    path: '/leave',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <LeavePage />,
      },
    ],
  },
  //회원 탈퇴 완료
  {
    path: '/leave-complete',
    element: <LeaveCompletePage />,
  },

  // 카카오 로그인 콜백
  {
    path: '/auth/kakao/callback',
    element: <KakaoCallback />,
  },
]);

export default router;
