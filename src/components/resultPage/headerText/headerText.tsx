import * as S from './headerText.style';

interface IHeaderTextProps {
  text: string;
}

export default function HeaderText({ text }: IHeaderTextProps) {
  return (
    <S.Container>
      <S.Text>{text} 님의 피부 진단 결과</S.Text>
    </S.Container>
  );
}
