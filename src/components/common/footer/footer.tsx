import * as S from './footer.style';

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.Logo />
        <S.Info>
          <S.ContactRow>
            <S.ContactTitle>Contact</S.ContactTitle>
            <S.Email>balladream25@gmail.com</S.Email>
          </S.ContactRow>
          <S.Copyright>© 2025 BallaDream. All rights reserved.</S.Copyright>
        </S.Info>
      </S.Content>
    </S.Container>
  );
}
