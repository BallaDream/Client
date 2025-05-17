import type { ReactNode } from 'react';

import * as S from './uploadTipCard.style';

type TTextColor = 'gray' | 'black';

interface IUploadTipCardProps {
  icon: ReactNode;
  lines: [string, string];
  colors: [TTextColor, TTextColor];
}

export default function UploadTipCard({ icon, lines, colors }: IUploadTipCardProps) {
  return (
    <S.Container>
      {icon}
      <S.TextSection>
        <S.Text $color={colors[0]}>{lines[0]}</S.Text>
        <S.Text $color={colors[1]}>{lines[1]}</S.Text>
      </S.TextSection>
    </S.Container>
  );
}
