import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/common/footer/footer';
import Header from '@/components/common/header/header';

import * as S from '@/layouts/main/mainLayout.style';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <S.Container>
        <Header />
        <S.Content>
          <Outlet />
        </S.Content>
        <Footer />
      </S.Container>
    </>
  );
}
