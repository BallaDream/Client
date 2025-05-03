import { Outlet } from 'react-router-dom';

import * as S from '@/layouts/main/mainLayout.style';

export default function MainLayout() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}
