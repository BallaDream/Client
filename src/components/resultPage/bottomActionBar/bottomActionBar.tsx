import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { captureFullPage, shareOrDownload } from '@/utils/shareCapture';

import * as S from './bottomActionBar.style';

import HeartIcon from '@/assets/icons/heart.svg?react';
import RedoIcon from '@/assets/icons/redo.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';

export default function BottomActionBar() {
  const navigate = useNavigate();
  const [sharing, setSharing] = useState(false);

  const handleRedo = () => {
    navigate('/upload');
  };

  const handleGogo = () => {
    navigate('/my/2');
  };

  const handleShare = async () => {
    try {
      setSharing(true);
      const blob = await captureFullPage();
      await shareOrDownload(blob, 'balladream_result_full.png');
    } catch (e) {
      console.error(e);
      alert('전체 화면 캡쳐/공유 중 오류가 발생했어요.');
    } finally {
      setSharing(false);
    }
  };

  return (
    <S.Container>
      <S.CustomButton $direction="left" onClick={handleRedo} disabled={sharing}>
        <RedoIcon />
        다시 진단하기
      </S.CustomButton>

      <S.CustomButton $direction="center" onClick={handleShare} disabled={sharing}>
        <ShareIcon />
        {sharing ? '캡쳐 중...' : '공유하기'}
      </S.CustomButton>

      <S.CustomButton $direction="right" onClick={handleGogo} disabled={sharing}>
        <HeartIcon />
        관심제품 보러가기
      </S.CustomButton>
    </S.Container>
  );
}
