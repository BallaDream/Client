import FormTypeDropdown from './formTypeDropdown';
import * as S from './recommendationSection.style';

import RefeshIcon from '@/assets/icons/refresh.svg?react';

export default function FilterControl() {
  const handleRefresh = () => {
    console.log(12);
  };
  return (
    <S.FilterControlContainer>
      <S.FilterControlPiceSection>
        <p>가격</p>
        <S.CostInput />
        <p>~</p>
        <S.CostInput />
        <p>원</p>
      </S.FilterControlPiceSection>

      <S.FilterControlDropdownSection>
        <FormTypeDropdown />
        <S.RefreshButton onClick={handleRefresh}>
          <RefeshIcon />
        </S.RefreshButton>
      </S.FilterControlDropdownSection>
    </S.FilterControlContainer>
  );
}
