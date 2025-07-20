import { LABEL, STATUS } from '@/enums/enums';

import { useResentDiagnose } from '@/hooks/useDiagnoseInfo';

import LabelSummary from '@/components/resultPage/diagnosisSummary/labelSummary';
import SkinRadarChart from '@/components/resultPage/diagnosisSummary/skinRadarChart';

import * as S from './profileSection.style';

import AvatarIcon from '@/assets/icons/avatar.svg?react';
import LockIcon from '@/assets/icons/lock.svg?react';
import ProfileIcon from '@/assets/icons/profileText.svg?react';

function ProfileSection() {
  const { data: resentDiagnose } = useResentDiagnose();

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
              <S.NameText>닉네임</S.NameText>
              <S.EmailText>abcd1234@naver.com</S.EmailText>
            </div>
            <S.ActionButton>정보 수정</S.ActionButton>
          </S.InfoContent>
          <S.InfoBoxFooter>
            <S.InfoBoxFooterText>
              <LockIcon style={{ width: 16, height: 16 }} />
              <span>로그인방식</span>
            </S.InfoBoxFooterText>
            <div>
              <span>카카오</span>
              <span>로 로그인</span>
            </div>
          </S.InfoBoxFooter>
        </S.InfoBox>
      </S.Card>

      {/* 피부 상태 */}
      <S.Card>
        <S.SectionHeader>
          <div style={{ display: 'flex', gap: 4, whiteSpace: 'nowrap', alignItems: 'center' }}>
            <span>닉네임</span>
            <span>님의 피부 현재 피부상태</span>
          </div>
          <S.DateButton>최근 진단일 | {resentDiagnose?.diagnoseDate} | ▶</S.DateButton>
        </S.SectionHeader>

        <S.ChartAndLegend>
          <SkinRadarChart data={resentDiagnose?.data} />
          <LabelSummary data={resentDiagnose?.data} />
        </S.ChartAndLegend>
      </S.Card>
    </S.Container>
  );
}

export default ProfileSection;
