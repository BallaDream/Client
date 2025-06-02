import * as S from './headerText.style';

interface IHeaderTextProps {
  text: string;
}

export default function HeaderText({ text }: IHeaderTextProps) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
