import { SyncLoader } from 'react-spinners';

import * as S from './SpinnerOverlay.style.ts';

interface ISpinnerOverlayProps {
  text: string;
}

export default function SpinnerOverlay({ text }: ISpinnerOverlayProps) {
  return (
    <S.Overlay>
      <SyncLoader size={15} margin={6} color="#ffffff" speedMultiplier={1} />
      {text && <S.Message>{text}</S.Message>}
    </S.Overlay>
  );
}
