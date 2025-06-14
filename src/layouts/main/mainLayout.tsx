import { Outlet } from 'react-router-dom';

import Header from '@/components/common/header/header';

import * as S from '@/layouts/main/mainLayout.style';

export default function MainLayout() {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
}
