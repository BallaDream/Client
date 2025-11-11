import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getLoginTypeLabel } from '@/utils/map';

import { useResentDiagnose } from '@/hooks/useDiagnoseInfo';
import { useDiagnosisHistory } from '@/hooks/useDiagnosisHistory';
import { useEditNickname } from '@/hooks/useEditInfo';

import SpinnerOverlay from '@/components/common/overlay/SpinnerOverlay';
import LabelSummary from '@/components/resultPage/diagnosisSummary/labelSummary';
import SkinRadarChart from '@/components/resultPage/diagnosisSummary/skinRadarChart';

import * as S from './profileSection.style';

import AvatarIcon from '@/assets/icons/avatar.svg?react';
import LockIcon from '@/assets/icons/lock.svg?react';
import ProfileIcon from '@/assets/icons/profileText.svg?react';
import { useAppSelector } from '@/store/hooks';

function ProfileSection() {
  const { data: resentDiagnose, isLoading: isResentDiagnoseLoading } = useResentDiagnose();
  const nickname = useAppSelector((state) => state.auth.nickname);
  const loginType = useAppSelector((state) => state.auth.loginType);
  const username = useAppSelector((state) => state.auth.username);
  const navigate = useNavigate();
  const { data: diagnoseHistory, isLoading: isDiagnoseHistoryLoading } = useDiagnosisHistory(0, 'latest');

  const [input, setInput] = useState({
    state: false,
    nickname: nickname || '',
  });

  const { mutate, isPending } = useEditNickname(() => {
    setInput((prev) => ({ ...prev, state: false }));
  });

  const handleEdit = () => {
    if (input.state) {
      // 저장 모드 - 입력값 검증
      if (!input.nickname.trim()) {
        alert('닉네임을 입력해주세요.');
        return;
      }

      // 닉네임 길이 제한 (10자 이하)
      if (input.nickname.trim().length > 10) {
        alert('닉네임은 10자 이하로 입력해주세요.');
        return;
      }

      // 닉네임이 기존과 같으면 그냥 편집 모드 종료
      if (input.nickname.trim() === nickname) {
        setInput((prev) => ({ ...prev, state: false }));
        return;
      }

      // 로그아웃 안내 및 확인
      const confirmed = window.confirm('닉네임을 변경하면 보안상 로그아웃됩니다.\n다시 로그인해야 하는데 계속하시겠습니까?');

      if (confirmed) {
        mutate(input.nickname.trim());
      }
    } else {
      // 편집 모드 진입
      setInput((prev) => ({ ...prev, state: true }));
    }
  };

  const handleCancel = () => {
    // 편집 취소 - 원래 닉네임으로 되돌리기
    setInput({
      state: false,
      nickname: nickname || '',
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, nickname: e.target.value }));
  };

  const handleNavigate = () => {
    navigate(`/result/${diagnoseHistory?.list[0].diagnoseId}`);
  };

  return (
    <S.Container>
      {/* 타이틀 */}
      <span style={{ fontSize: 30, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
        <ProfileIcon />
        회원 정보
      </span>

      <S.Card>
        {/* 기본 정보 */}
        <S.SectionTitle>기본 정보</S.SectionTitle>
        <S.InfoBox>
          <S.InfoContent>
            <AvatarIcon style={{ width: 100, height: 100, flexShrink: 0 }} />
            <div>
              {input.state ? (
                <S.NameInput type="text" value={input.nickname} onChange={onChange} disabled={isPending} maxLength={10} placeholder="닉네임 (10자 이하)" />
              ) : (
                <S.NameText>{nickname}</S.NameText>
              )}
              <S.EmailText>{username}</S.EmailText>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {input.state ? (
                <>
                  <S.ActionButton onClick={handleEdit} disabled={isPending}>
                    {isPending ? '변경 중...' : '확인'}
                  </S.ActionButton>
                  <S.ActionButton onClick={handleCancel} disabled={isPending}>
                    취소
                  </S.ActionButton>
                </>
              ) : (
                <S.ActionButton onClick={handleEdit}>정보 수정</S.ActionButton>
              )}
            </div>
          </S.InfoContent>
          <S.InfoBoxFooter>
            <S.InfoBoxFooterText>
              <LockIcon style={{ width: 16, height: 16 }} />
              <span>로그인방식</span>
            </S.InfoBoxFooterText>
            <div>
              <span>{getLoginTypeLabel(loginType)}</span>
              <span>{loginType == 'WEB' ? '으' : ''}로 로그인</span>
            </div>
          </S.InfoBoxFooter>
        </S.InfoBox>
      </S.Card>

      {/* 피부 상태 */}
      <S.Card>
        {(isResentDiagnoseLoading ?? isDiagnoseHistoryLoading) && <SpinnerOverlay text="로딩중" />}

        <S.SectionHeader>
          <div style={{ display: 'flex', gap: 4, whiteSpace: 'nowrap', alignItems: 'center' }}>
            <span>{nickname}</span>
            <span>님의 피부 현재 피부상태</span>
          </div>
          {resentDiagnose?.data && <S.DateButton onClick={handleNavigate}>최근 진단일 | {resentDiagnose?.diagnoseDate} | ▶</S.DateButton>}
        </S.SectionHeader>

        {resentDiagnose?.data ? (
          <S.ChartAndLegend>
            <SkinRadarChart data={resentDiagnose?.data} />
            <LabelSummary data={resentDiagnose?.data} />
          </S.ChartAndLegend>
        ) : (
          <S.EmptyText>💡 진단 이력이 아직 없습니다. 피부 분석을 통해 나에게 꼭 맞는 제품을 찾아보세요!</S.EmptyText>
        )}
      </S.Card>
    </S.Container>
  );
}

export default ProfileSection;
