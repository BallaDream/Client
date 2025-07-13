import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '@/store/hooks';

function ProtectedRoute() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLogin);
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
