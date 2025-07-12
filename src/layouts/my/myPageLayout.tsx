import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/common/header/header';
import Sidebar from '@/components/myPage/sidebar/sidebar';

import * as S from '@/layouts/my/myPageLayout.style';

export default function MyPageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <S.Container>
        <Header />
        <S.Content>
          <Sidebar />
          <Outlet />
        </S.Content>
      </S.Container>
    </>
  );
}
