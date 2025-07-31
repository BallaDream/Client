// HistoryCard.tsx
import { useNavigate } from 'react-router-dom';

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
  statusList?: DiagnosisStatus[];
  diagnoseId: number;
}

export default function HistoryCard({ date, statusList = [], diagnoseId }: HistoryCardProps) {
  const navigate = useNavigate();

  const handleDelete = () => {
    alert('삭제 기능은 추후 지원될 예정입니다.');
  };

  const handleDetailClick = () => {
    console.log('➡️ 자세히 보기 클릭 - diagnoseId:', diagnoseId);
    navigate(`/result/${diagnoseId}`);
  };

  console.log('🟨 HistoryCard - statusList:', statusList);

  return (
    <S.Card>
      <S.Header>
        <S.Date>{date}</S.Date>
        <S.DeleteButton onClick={handleDelete}>
          <img src={deleteIcon} alt="삭제" />
        </S.DeleteButton>
      </S.Header>

      <S.Title>피부상태 요약</S.Title>

      <S.StatusList>
        {statusList.length > 0 ? (
          statusList.map(({ name, level }) => (
            <S.StatusItem key={name}>
              <span>- {name}</span>
              <S.Level $level={level}>{level}</S.Level>
            </S.StatusItem>
          ))
        ) : (
          <S.StatusItem>
            <span style={{ color: 'crimson' }}>❌ 표시할 상태가 없습니다</span>
          </S.StatusItem>
        )}
      </S.StatusList>

      <S.ButtonWrapper>
        <S.DetailButton onClick={handleDetailClick}>자세히 보기 ▶</S.DetailButton>
      </S.ButtonWrapper>
    </S.Card>
  );
}
