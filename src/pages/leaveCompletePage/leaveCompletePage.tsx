import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '@/components/common/footer/footer';
import LeaveHeader from '@/components/common/header/simpleHeader';

import Logo from '@/assets/icons/logo.svg?react';
import * as S from '@/pages/leaveCompletePage/leaveCompletePage.style';

export default function LeaveCompletePage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('nickname');
  }, []);

  return (
    <>
      <LeaveHeader />
      <S.Container>
        <S.Content>
          <S.LogoWrapper>
            <Logo width={100} height={100} />
          </S.LogoWrapper>
          <S.Title>회원탈퇴가 완료되었습니다.</S.Title>
          <S.Description>
            <b>BallaDream</b>을 이용해주시고 사랑해주셔서 감사합니다.
            <br />
            더욱더 노력하고 발전하는 <b>BallaDream</b>이 되겠습니다.
          </S.Description>
          <S.ConfirmButton onClick={() => navigate('/')}>확인</S.ConfirmButton>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
}
