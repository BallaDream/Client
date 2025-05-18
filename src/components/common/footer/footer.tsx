import * as S from './footer.style';

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.Logo />
        <S.Info>
          <strong>고객 문의</strong>
          <br />
          개인정보 처리방침
          <br />
          서비스 이용약관
        </S.Info>
      </S.Content>
    </S.Container>
  );
}
