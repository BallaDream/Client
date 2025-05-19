import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/main/mainLayout';
import HomePage from '@/pages/homePage/homePage';
import SignupPage from '@/pages/signupPage/signupPage';
import ResultPage from '@/pages/resultPage/resultPage';
import UploadPage from '@/pages/uploadPage/uploadPage';

// 라우팅설정(이것도 바꿔야됨)
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'result', element: <ResultPage /> },
      { path: 'upload', element: <UploadPage /> },
    ],
  },
]);

export default router;
