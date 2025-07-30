import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SimpleHeader from '@/components/common/header/simpleHeader';

import CheckerIcon from '@/assets/icons/checker_icon.svg?react';
import * as S from '@/pages/leavePage/leavePage.style';

export default function LeavePage() {
  const [agreed, setAgreed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAgreementChange = () => {
    setAgreed((prev) => !prev);
  };

  const handleWithdrawClick = () => {
    if (!agreed) {
      alert('약관에 동의하셔야 탈퇴할 수 있습니다.');
      return;
    }
    setShowModal(true);
  };

  const handleConfirmWithdraw = () => {
    setShowModal(false);

    // TODO: 회원 탈퇴 API 요청 후 성공 시 아래 처리 수행
    localStorage.removeItem('accessToken');
    localStorage.removeItem('nickname');
    // TODO: Redux 상태 초기화(dispatch(logout()) 등)

    navigate('/leave-complete'); // ✅ 탈퇴 완료 페이지 이동
  };

  const handleCancelWithdraw = () => {
    setShowModal(false);
  };

  return (
    <>
      <SimpleHeader />
      <S.Container>
        <S.Title>회원탈퇴 유의사항</S.Title>
        <S.Subtitle>회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.</S.Subtitle>

        <S.Box>
          {/* 1번 항목 */}
          <S.TextGroup>
            <S.ListItem>
              <CheckerIcon />
              <S.BoldText>탈퇴한 계정은 6개월 이후 모든 이용 기록이 삭제됩니다.</S.BoldText>
            </S.ListItem>
            <S.Text>
              • 회원 탈퇴 시 계정은 <b>즉시 비활성화</b>되며, <b>6개월간 보관 후</b> 모든 데이터가 영구 삭제됩니다.
              <br />• 단, 부정 이용(도용, 악의적 활동 등)이 의심되는 경우는 더 길게 보관될 수 있습니다.
            </S.Text>
          </S.TextGroup>

          {/* 2번 항목 */}
          <S.TextGroup>
            <S.ListItem>
              <CheckerIcon />
              <S.BoldText>탈퇴 후 동일 이메일로 로그인이 불가합니다.</S.BoldText>
            </S.ListItem>
            <S.Text>
              • 탈퇴한 이메일 계정으로는 향후 로그인할 수 없습니다.
              <br />• OAuth(카카오 등)로 가입한 경우에도, 탈퇴 시 <b>연결 해제 및 관련 데이터가 초기화</b>됩니다.
            </S.Text>
          </S.TextGroup>

          {/* 3번 항목 */}
          <S.TextGroup>
            <S.ListItem>
              <CheckerIcon />
              <S.BoldText>회원탈퇴 시 아래 항목들은 6개월 후 모두 삭제되며, 이후에는 조회 및 복구가 불가능합니다.</S.BoldText>
            </S.ListItem>
            <S.Text>
              • 탈퇴 6개월 후에는 아래 항목들이 <b>영구적으로 삭제</b>되며, 이후 복구는 불가능합니다.
            </S.Text>

            <S.Table>
              <thead>
                <tr>
                  <th>항목</th>
                  <th>삭제되는 내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI 진단 기록</td>
                  <td>사진, 분석 결과, 진단 요약 등 전체 삭제</td>
                </tr>
                <tr>
                  <td>추천 이력</td>
                  <td>맞춤 화장품 추천 히스토리 전체 삭제</td>
                </tr>
                <tr>
                  <td>마이페이지 정보</td>
                  <td>이름, 닉네임, 이메일 등 회원 정보 삭제</td>
                </tr>
                <tr>
                  <td>즐겨찾기</td>
                  <td>저장한 제품/성분/브랜드 등 즐겨찾기 삭제</td>
                </tr>
                <tr>
                  <td>기타</td>
                  <td>접속 로그, 약관 동의 정보 등 관련 데이터 삭제</td>
                </tr>
              </tbody>
            </S.Table>
            <S.WarningText>진단 리포트나 추천 이력을 추후 참고할 계획이라면 반드시 사전에 백업해 주세요.</S.WarningText>
          </S.TextGroup>

          {/* 4번 항목 */}
          <S.TextGroup>
            <S.ListItem>
              <CheckerIcon />
              <S.BoldText>동일 이메일로 재가입 시 계정 복구가 가능합니다.</S.BoldText>
            </S.ListItem>
            <S.Text>
              • <b>6개월 이내</b> 동일 이메일로 다시 가입하면, <b>기존 정보가 복구</b>됩니다.
              <br />• 단, <b>6개월이 지나면 모든 데이터가 완전히 삭제</b>되므로 이후에는 <b>복구가 불가능</b>합니다.
            </S.Text>
          </S.TextGroup>

          <S.FinalText>위 내용을 모두 확인하였으며, 이에 동의합니다.</S.FinalText>

          <S.AgreementCheck>
            <S.Checkbox onClick={handleAgreementChange}>{agreed && <CheckerIcon />}</S.Checkbox>
            <span>탈퇴 안내사항을 모두 확인하였으며, 이에 동의합니다.</span>
          </S.AgreementCheck>
        </S.Box>

        <S.Button disabled={!agreed} onClick={handleWithdrawClick}>
          약관동의 후 탈퇴하기
        </S.Button>
      </S.Container>

      {showModal && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalMessage>정말 탈퇴하시겠습니까?</S.ModalMessage>
            <S.ModalButtons>
              <S.ModalButton onClick={handleCancelWithdraw}>아니오</S.ModalButton>
              <S.ModalButton onClick={handleConfirmWithdraw}>네</S.ModalButton>
            </S.ModalButtons>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
}
