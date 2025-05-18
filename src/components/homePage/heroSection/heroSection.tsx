import { useNavigate } from 'react-router-dom';
import * as S from './heroSection.style';
import FaceImg from '@/assets/icons/ai_model_img.svg?react';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/upload');
  };

  return (
    <S.Container>
      <S.ImageWrapper>
        <FaceImg />
      </S.ImageWrapper>

      <S.TextBlock>
        <S.Title>SKIN CHECK</S.Title>
        <S.Description>
          <strong>BALLADREAM</strong>의 특별한 AI 피부 분석으로 찾는 맞춤형 스킨케어. <br />
          피부 진단 후 개인 맞춤형 화장품 추천을 만나보세요.
          <br />
          <br />
          <strong>BALLADREAM</strong>에서 AI 피부진단을 통해 나에게 맞는 화장품을 추천 받아보세요.
        </S.Description>

        <S.Button onClick={handleStartClick}>AI 피부분석 시작하기 →</S.Button>
      </S.TextBlock>
    </S.Container>
  );
}
