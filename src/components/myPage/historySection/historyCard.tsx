// src/components/myPage/historySection/historyCard.tsx
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import * as S from './historyCard.style';

import deleteIcon from '@/assets/icons/delete_icon.svg';

import { deleteDiagnosis } from '@/api/myPage/my';

interface IDiagnosisStatus {
  name: string;
  level: '예방' | '권고' | '필수';
}

interface IHistoryCardProps {
  date: string;
  statusList?: IDiagnosisStatus[];
  diagnoseId: number;
}

export default function HistoryCard({ date, statusList = [], diagnoseId }: IHistoryCardProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    const confirmed = window.confirm('정말 해당 진단 기록을 삭제하시겠습니까?');
    if (!confirmed) return;

    try {
      console.log('📡 DELETE 요청 전송:', diagnoseId);
      await deleteDiagnosis(diagnoseId);
      alert('✅ 진단 기록이 삭제되었습니다.');

      queryClient.invalidateQueries({ queryKey: ['diagnosisHistory'] });
    } catch (error) {
      console.error('❌ 삭제 중 오류:', error);
      alert('⚠️ 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleDetailClick = () => {
    navigate(`/result/${diagnoseId}`);
  };

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
