// src/components/myPage/historySection/historyCard.tsx
import * as S from './historyCard.style';

import deleteIcon from '@/assets/icons/delete_icon.svg';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface DiagnosisStatus {
  name: string;
  level: '예방' | '권고' | '필수';
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface HistoryCardProps {
  date: string;
  statusList: DiagnosisStatus[];
}

export default function HistoryCard({ date, statusList }: HistoryCardProps) {
  return (
    <S.Card>
      <S.Header>
        <S.Date>{date}</S.Date>
        <S.DeleteButton>
          <img src={deleteIcon} alt="삭제" />
        </S.DeleteButton>
      </S.Header>

      <S.Title>피부상태 요약</S.Title>

      <S.StatusList>
        {statusList.map(({ name, level }) => (
          <S.StatusItem key={name}>
            - {name}
            <S.Level $level={level}>{level}</S.Level>
          </S.StatusItem>
        ))}
      </S.StatusList>

      <S.ButtonWrapper>
        <S.DetailButton>자세히 보기 ▶</S.DetailButton>
      </S.ButtonWrapper>
    </S.Card>
  );
}
