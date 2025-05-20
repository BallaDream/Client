import * as S from './recommendationSection.style';

type TStatus = {
  status: string;
  description: string;
};
const Status: TStatus = {
  status: '예방',
  description: '설명',
};
export default function Description() {
  //const { data } = useDiagnoseInfo();
  return (
    <S.DescriptionContainer>
      <S.DescriptionLabel>
        <p>{Status.status}</p>
        <p>단계</p>
      </S.DescriptionLabel>
      <>{Status.description}</>
    </S.DescriptionContainer>
  );
}
