import React, { useState } from 'react';

import { getLoginTypeLabel } from '@/utils/map';

import { useResentDiagnose } from '@/hooks/useDiagnoseInfo';
import { useEditNickname } from '@/hooks/useEditInfo';

import SpinnerOverlay from '@/components/common/overlay/SpinnerOverlay';
import LabelSummary from '@/components/resultPage/diagnosisSummary/labelSummary';
import SkinRadarChart from '@/components/resultPage/diagnosisSummary/skinRadarChart';

import * as S from './profileSection.style';

import AvatarIcon from '@/assets/icons/avatar.svg?react';
import LockIcon from '@/assets/icons/lock.svg?react';
import ProfileIcon from '@/assets/icons/profileText.svg?react';
import { useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router-dom';

function ProfileSection() {
  const { data: resentDiagnose, isLoading } = useResentDiagnose();
  const nickname = useAppSelector((state) => state.auth.nickname);
  const loginType = useAppSelector((state) => state.auth.loginType);
  const username = useAppSelector((state) => state.auth.username);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    state: false,
    nickname: nickname || '',
  });

  const { mutate } = useEditNickname(() => {
    setInput(() => ({ ...input, state: false }));
  });
  const handleEdit = () => {
    input.state ? mutate(input.nickname) : setInput({ ...input, state: !input.state });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, nickname: e.target.value });
  };

  const handleNavigate = () => {
    navigate('/');
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
              {input.state ? <S.NameInput type="text" value={input.nickname} onChange={onChange} /> : <S.NameText>{nickname}</S.NameText>}
              <S.EmailText>{username}</S.EmailText>
            </div>
            {input.state ? <S.ActionButton onClick={handleEdit}>확인</S.ActionButton> : <S.ActionButton onClick={handleEdit}>정보 수정</S.ActionButton>}
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
        {isLoading && <SpinnerOverlay text="로딩중" />}

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
